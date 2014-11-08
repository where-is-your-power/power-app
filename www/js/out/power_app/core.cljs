(ns power-app.core
  (:require [om.core :as om :include-macros true]
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
         :assignment {:title "Zet alle lampen in de woonkamer aan"
                      :description "Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Nullam mi leo, varius
                      cursus ipsum eu, vehicula tincidunt massa. Nulla
                      et erat vel tellus porttitor malesuada quis quis
                      magna. Curabitur et pellentesque urna. Aliquam
                      tristique dolor erat, quis feugiat mauris rhoncus
                      non. Quisque tincidunt euismod enim, id luctus
                      arcu. Aliquam erat volutpat. Nulla egestas purus
                      ligula, id luctus velit mollis sollicitudin. Sed
                      suscipit et nisl quis ullamcorper. Proin convallis
                      auctor iaculis. Donec nec ligula rutrum, vehicula
                      erat vel, fermentum lorem. " }
         :settings {:period :short
                    :difficulty :easy}}))

(defonce server-address "http://localhost:8000")

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn login [username] ;; todo trim
  (GET (str server-address "/user/" (-> username
                                        clojure.string/trim
                                        clojure.string/lower-case))
       {:handler (fn [result]
                   (let [r (t/reader :json)
                         v (t/read r result)]
                     (.log js/console "TESSTT")
                     (swap! app-state assoc :user (get v :user)
                                            :points (get v :points))))
        :error-handler error-handler
        }))

(defn get-questions [username]
  (.log js/console "FOFOFOFOF")
  (GET (str server-address "/assignment/questions?username=" (-> username
                                        clojure.string/trim
                                        clojure.string/lower-case))
       {:handler (fn [result]
                   (let [r (t/reader :json)
                         v (t/read r result)]
                     (.log js/console (prn-str v))
                     (swap! app-state assoc :questions v)))
        :error-handler error-handler
        }))

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
         (dom/legend nil "Login")
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
                 "Volgende opdracht"))))))))


(defn current-assignment-component [root owner {:keys [next-state]}]
  (reify
    om/IRenderState
    (render-state [_ _]
      (dom/div nil
       (dom/div
        #js {:className "row"
             :style #js {:width "100%"
                         :text-align "center"}}
        (dom/h1 #js {:className "col-xs-12"
                     :style #js {:font-size "200%"}} "Opdracht 51"))
       (dom/div
        #js {:className "row"
             :style #js {:width "100%"
                         :text-align "center"}}
        (dom/h1 #js {:className "col-xs-12"
                     :style #js {:font-size "250%"}} "Zet alle lampen in de woonkamer aan."))
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
                                                  next-state)))}
                 "Klaar (15:12)"))))))))

(defn new-assignment-component [root owner {:keys [next-state]}]
  (reify
    om/IRenderState
    (render-state [_ _]
      (let [points (inc (:points root))
            open-questions (filter (comp nil? :answer) (:questions root))
            question (first open-questions)
            last? (< (count open-questions) 2)]
        (dom/div nil
                 (dom/div
                  #js {:className "row"
                       :style #js {:width "100%"
                                   :text-align "center"}}
                  (dom/h1 #js {:className "col-xs-12"
                               :style #js {:font-size "200%"}} (str "Opdracht "
                                                                    points
                                                                    " selectie")))
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
                                     (om/transact! question
                                                   #( assoc %
                                                      :answer
                                                      true))
                                     (when last?
                                       (om/transact!
                                        root
                                        #(assoc %
                                           :state
                                           next-state))))}
                     "Ja")
                    (dom/a
                     #js {:className "btn btn-primary"
                          :onClick (fn [e]
                                     (.preventDefault e)
                                     (om/transact! question
                                                   #( assoc %
                                                      :answer
                                                      false))
                                     (when last?
                                       (om/transact!
                                        root
                                        #(assoc %
                                           :state
                                           next-state))))}
                     "Nee")))))))))


(defn explain-assignment-component [root owner {:keys [next-state]}]
  (reify
    om/IRenderState
    (render-state [_ _]
      (dom/div nil
       (dom/div
        #js {:className "row"
             :style #js {:width "100%"
                         :text-align "center"}}
        (dom/h1 #js {:className "col-xs-12"
                     :style #js {:font-size "200%"}} "Uitleg opdracht 51"))
       (dom/div
        #js {:className "row"
             :style #js {:width "100%"
                         :text-align "center"}}
        (dom/div #js {:className "col-xs-12"}
                 (dom/h1 #js {:style #js {:font-size "175%"}} "Zet alle lampen in de woonkamer aan.")
                 (dom/p nil "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi leo, varius cursus ipsum eu, vehicula tincidunt massa. Nulla et erat vel tellus porttitor malesuada quis quis magna. Curabitur et pellentesque urna. Aliquam tristique dolor erat, quis feugiat mauris rhoncus non. Quisque tincidunt euismod enim, id luctus arcu. Aliquam erat volutpat. Nulla egestas purus ligula, id luctus velit mollis sollicitudin. Sed suscipit et nisl quis ullamcorper. Proin convallis auctor iaculis. Donec nec ligula rutrum, vehicula erat vel, fermentum lorem. ")))
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
                 "Nieuwe opdracht"))))))))

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
        (dom/div
         #js {:className "row"}
         (dom/div
          #js {:className "col-xs-12"}
          (dom/hr nil)
          (pr-str root)))))))
 app-state
 {:target (. js/document (getElementById "app"))})
