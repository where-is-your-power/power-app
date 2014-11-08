(ns power-app.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [om.core :as om :include-macros true]
            [cljs.core.async :refer [put! <! >! chan timeout]]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]
            [cognitect.transit :as t]))

(enable-console-print!)

(defonce app-state
  (atom {:user nil
         :deviceready false
         :state :score
         :points 0
         :questions []
         :assignment {}}))

(defonce server-address "http://power-app.0x7be.com:8080")

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn login [username] ;; todo trim
  (let [trimmed (-> username
                    clojure.string/trim
                    clojure.string/lower-case)]
    (when ((comp not empty?) trimmed)
      (GET (str server-address "/user/" trimmed)
           {:handler (fn [result]
                       (swap! app-state assoc :user trimmed
                              :name (get result :name)
                              :points (get result :points)))
            :error-handler error-handler})
      (GET (str server-address "/leaderboard/3")
           {:handler (fn [result]
                       (swap! app-state assoc :leaderboard result))}))))

(defn get-questions [username]
  (.log js/console "FOFOFOFOF")
  (GET (str server-address "/assignment/new/" username)
       {:handler (fn [result]
                   (.log js/console (prn-str result))
                   (swap! app-state assoc :assignment result)
                   (swap! app-state assoc-in [:assignment :begin] (js/Date.)))
        :error-handler error-handler
        }))

(defn format-number [s] (str (when (<= (count (str s)) 1) "0") s))

(defn calculate-duration [ms]
  (if (> 0 ms)
    [0 0 0]
    (let [minutes (Math/floor (/ ms
                                 (* 1000 60)))
          seconds (Math/floor (/ (- ms
                                    (* minutes 1000 60))
                                 (* 1000)))
          milli-seconds (- ms
                           (* minutes 1000 60)
                           (* seconds 1000))]
      [minutes seconds milli-seconds])))

(.addEventListener
 js/document
 "deviceready"
 (fn []
   (swap! app-state #(assoc % :deviceready true))))

(defn login-component [root owner opts]
  (reify
    om/IRenderState
    (render-state [_ _]
      (dom/div
       nil
       (dom/form
        #js {:className "form-horizontal"}
        (dom/fieldset
         nil
         (dom/div
          #js {:className "form-group"}
          (dom/div
           #js {:className "col-xs-12"}
           (dom/input #js {:ref "name"
                           :className "form-control"
                           :placeholder "Naam"})))
         (dom/div
          #js {:className "form-group"}
          (dom/div
           #js {:className "col-xs-12"}
           (dom/button
            #js {:type "submit"
                 :className "btn btn-primary"
                 :onClick
                 (fn [e]
                   (let [name (.-value (om/get-node owner "name"))]
                     (.preventDefault e)
                     (login name)))}
            "Inloggen")))))))))

;; 131.211.252.61 8080

(defn handler [response]
  (.log js/console (str response)))

(defn score-component [root owner {:keys [next-state]}]
  (reify
    om/IRenderState
    (render-state [_ _]
      (dom/div nil
               (dom/div
                #js {:className "row"
                     :style #js {:width "100%"
                                 :text-align "center"}}
                (dom/h1 #js {:className "col-xs-12"
                             :style #js {:font-size "1200%"}} (:points root)))

               (dom/div
                #js {:className "row"}
                (dom/div
                 #js {:className "col-xs-12"}
                 (dom/div
                  #js {:className "btn-group btn-group-justified"}
                  (dom/a
                   #js {:className "btn btn-primary"
                        :onClick (fn [e]
                                   (.preventDefault e)
                                   (.log js/console "HIERRR")
                                   (get-questions (:user @root))
                                   (om/transact! root
                                                 #(assoc %
                                                    :state
                                                    next-state)))}
                   "Volgende opdracht"))))
               (apply dom/div nil
                      (map #(dom/div
                             #js {:className "row"
                                  :style #js {:width "100%"
                                              :text-align "left"}}
                             (dom/p #js {:className "col-xs-12"
                                         :style #js {:font-size "150%"}}
                                    (str (:name %)
                                         " (" (:points %) ")"
                                         )))
                           (:leaderboard root)))))))


(defn current-assignment-component [root owner {:keys [next-state]}]
  (reify
    om/IWillMount
    (will-mount [_]
      (go-loop
        []
        (<! (timeout 500))
        (om/refresh! owner)
        (recur)))
    om/IRenderState
    (render-state [_ _]
      (dom/div nil
               (dom/div
                #js {:className "row"
                     :style #js {:width "100%"
                                 :text-align "center"}}
                (dom/h1 #js {:className "col-xs-12"
                             :style #js {:font-size "250%"}}
                        (get-in root [:assignment :assignment])))
               (dom/div
                #js {:className "row"}
                (dom/div
                 #js {:className "col-xs-12"}
                 (dom/p nil (get-in root [:assignment :description]))))
               (dom/div
                #js {:className "row"}
                (dom/div
                 #js {:className "col-xs-12"}
                 (dom/div
                  #js {:className "btn-group btn-group-justified"}
                  (dom/a
                   #js {:className "btn btn-primary"
                        :onClick (fn [e]
                                   (.preventDefault e)
                                   (om/transact! root
                                                 #(assoc %
                                                    :state
                                                    next-state))
                                   (om/transact! root
                                                 #(assoc-in % [:assignment :end]
                                                            (js/Date.))))}
                   (let [[minutes seconds _]
                         (calculate-duration
                          (- (get-in root [:assignment :finish-before])
                             (.getTime (js/Date.))))]
                     (str "Klaar ("
                          (format-number minutes)
                          ":"
                          (format-number seconds)
                          ")"))))))))))

(defn new-assignment-component [root owner {:keys [next-state]}]
  (reify
    om/IRenderState
    (render-state [_ _]
      (let [points (inc (:points root))
            open-questions (filter (comp nil? :answer) (get-in root [:assignment :questions]))
            question (first open-questions)
            last? (< (count open-questions) 2)]
        (dom/div nil
                 (dom/div
                  #js {:className "row"
                       :style #js {:width "100%"
                                   :text-align "center"}}
                  (dom/h1 #js {:className "col-xs-12"
                               :style #js {:font-size "200%"}} (str "Opdracht selectie")))
                 (dom/div
                  #js {:className "row"
                       :style #js {:width "100%"
                                   :text-align "center"}}
                  (dom/h1 #js {:className "col-xs-12"
                               :style #js {:font-size "250%"}} (:question question)))
                 (dom/div
                  #js {:className "row"}
                  (dom/div
                   #js {:className "col-xs-12"}
                   (dom/div
                    #js {:className "btn-group btn-group-justified"}
                    (dom/a
                     #js {:className "btn btn-primary"
                          :onClick (fn [e]
                                     (.preventDefault e)
                                     (if (not= true (:requiredAnswer @question))
                                       (get-questions (:user @root))
                                       (do
                                         (om/transact! question
                                                       #(assoc %
                                                          :answer
                                                          true))
                                         (when last?
                                           (om/transact!
                                            root
                                            #(assoc %
                                               :state
                                               next-state))
                                           (om/transact!
                                            root
                                            #(assoc-in
                                              %
                                              [:assignment :finish-before]
                                              (+ (.getTime (js/Date.))
                                                 (* 1000 (get-in % [:assignment :allowedTime])))
                                                       ))
                                           ))))}
                     "Ja")
                    (dom/a
                     #js {:className "btn btn-primary"
                          :onClick (fn [e]
                                     (.preventDefault e)
                                     (if (not= false (:requiredAnswer @question))
                                       (get-questions (:user @root))
                                       (do
                                         (om/transact! question
                                                       #(assoc %
                                                          :answer
                                                          false))
                                         (when last?
                                           (om/transact!
                                            root
                                            #(assoc %
                                               :state
                                               next-state))
                                           (om/transact!
                                            root
                                            #(assoc-in
                                              %
                                              [:assignment :finish-before]
                                              (+ (.getTime (js/Date.))
                                                 (* 1000 (get-in % [:assignment :allowedTime])))
                                                       ))))))}
                     "Nee")))))))))


(defn explain-assignment-component [root owner {:keys [next-state]}]
  (reify
    om/IWillMount
    (will-mount [_]
      (go
        (GET (str server-address "/smallfact")
             {:handler (fn [result] (om/transact! root #(assoc % :smallfact result)))})
        (<! (timeout 2000))
        (let [result (> (Math/random) 0.1)]
          (om/transact! root #(assoc-in % [:assignment :result] result))
          (if result
            (GET (str server-address "/assignment/success/" (get @root :user)))
            (GET (str server-address "/assignment/fail/" (get @root :user))))
          (login (get @root :user)))))
    om/IRenderState
    (render-state [_ _]
      (dom/div nil
               (dom/div
                #js {:className "row"
                     :style #js {:width "100%"
                                 :text-align "center"}}
                (dom/h1 #js {:className "col-xs-12"
                             :style #js {:font-size "200%"}} (str "Resultaat opdracht")))
               (dom/div
                #js {:className "row"
                     :style #js {:width "100%"
                                 :text-align "center"}}
                (dom/div #js {:className "col-xs-12"}
                         (dom/h1 #js {:style #js {:font-size "175%"}} (get-in root [:assignment :assignment]))
                         (dom/p nil
                                (let [result (get-in root [:assignment :result])]
                                  (if (nil? result)
                                    (dom/i #js {:className "fa fa-circle-o-notch fa-spin"
                                                :style #js {:font-size "300%"}})
                                    (if result
                                      (dom/i #js {:className "fa fa-check"
                                                  :style #js {:font-size "300%"}})
                                      (dom/i #js {:className "fa fa-remove"
                                                  :style #js {:font-size "300%"}}))))
                                )))
               (dom/div
                #js {:className "row"}
                (dom/div
                 #js {:className "col-xs-12"}
                 (dom/p nil (:smallfact root))))
               (dom/div
                #js {:className "row"}
                (dom/div
                 #js {:className "col-xs-12"}
                 (dom/div
                  #js {:className "btn-group btn-group-justified"}
                  (dom/a
                   #js {:className "btn btn-primary"
                        :onClick (fn [e]
                                   (.preventDefault e)
                                   (om/transact! root
                                                 #( assoc %
                                                    :state
                                                    next-state)))}
                   "OK"))))))))

;; score -> new assignment -> current assignment -> explain assignment -> score

(def state-machine {:score {:next-state :new-assignment
                            :component score-component}
                    :new-assignment {:next-state :current-assignment
                                     :component new-assignment-component}
                    :current-assignment {:next-state :explain-assignment
                                         :component current-assignment-component}
                    :explain-assignment {:next-state :score
                                         :component explain-assignment-component}
                    })

(om/root
 (fn [{:keys [user state] :as root} owner]
   (reify
     om/IRender
     (render [_]
       (dom/div
        #js {:className "container"}
        (dom/h2
            nil
            (dom/i #js {:className "fa fa-bolt"})
            " "
            "Power-app!")
        (if (not user)
          (om/build login-component root)
          (om/build (:component (get state-machine state)) root
                    {:opts {:next-state (:next-state (get state-machine state))}}))
        ))))
 app-state
 {:target (. js/document (getElementById "app"))})


(comment (dom/div
         #js {:className "row"}
         (dom/div
          #js {:className "col-xs-12"}
          (dom/hr nil)
          (pr-str root))))
