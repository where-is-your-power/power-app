(ns power-app.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ajax.core :refer [GET POST]]))

(enable-console-print!)

(def period-enum
  {:short "Kort"
   :medium "Middel"
   :long "Lang"})

(def difficulty-enum
  {:easy "Makkelijk"
   :normal "Normaal"
   :hard "Moeilijk"})

(def assignment-type-enum
  {:target "Doel"
   :challenge "Opdracht"})

(def assignment-state-enum
  {:propose "Voorstelen"
   :started "Bezig"
   :failed "Mislukt"
   :completed "Gelukt"})

(defonce app-state
  (atom {:userid nil
         :deviceready false
         :state :score
         :points 0
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

(.addEventListener
 js/document
 "deviceready"
 (fn []
   (swap! app-state #(assoc % :deviceready true))))

(defn create-settings-button [root enum path]
  (dom/div
   #js {:className "row"}
   (dom/div
    #js {:className "col-xs-12"}
    (apply
     dom/div
     #js {:className "btn-group btn-group-justified"}
     (map (fn [[k v]]
            (dom/a
             #js {:className (str "btn btn-default"
                                  (when (= (get-in root path)
                                           k)
                                    " active"))
                  :onClick
                  (fn [e]
                    (.preventDefault e)
                    (om/transact!
                     root
                     #(assoc-in % path k))
                    (GET "https://live.mpare.net/users.json"))}
             v))
          enum)))))

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
                     (om/transact! root #(assoc %
                                           :userid "test"
                                           :name name))))}
            "Inloggen")))))))))

(defn assignment-component [{:keys [assignment]
                             {:keys [state
                                     type
                                     title
                                     description
                                     data]} :assignment
                             :as root} owner opts]
  (reify
    om/IRenderState
    (render-state [_ _]
      (let [proposing? (= state :propose)]
        (apply
         dom/div
         nil
         (concat
          [(dom/h2 nil title)]
          (when proposing?
            [(dom/p nil description)])
          (when (not proposing?)
            [(dom/p
              nil
              (:value data)
              " KwH")])
          (when (and proposing? (= type :challenge))
            [(create-settings-button root
                                     period-enum
                                     [:settings :period])
             (create-settings-button root
                                     difficulty-enum
                                     [:settings :difficulty])])
          (when proposing?
            [(dom/div
              #js {:className "row"}
              (dom/div
               #js {:className "col-xs-12"}
               (dom/div
                #js {:className "btn-group btn-group-justified"}
                (dom/a
                 #js {:className "btn btn-primary"
                      :onClick (fn [e]
                                 (.preventDefault e)
                                 (om/transact! assignment
                                               #(assoc %
                                                  :state
                                                  :started)))}
                 "Accepteren!")
                (dom/a
                 #js {:className "btn btn-default"
                      :onClick (fn [e]
                                 (.preventDefault e)
                                 (om/transact! assignment
                                               #(assoc %
                                                  :type
                                                  (if (= (:type %) :target)
                                                    :challenge
                                                    :target))))}
                 "Doe toch maar iets anders"))))])
          (when (not proposing?)
            [(dom/div
              #js {:className "row"}
              (dom/div
               #js {:className "col-xs-12"}
               (dom/div
                #js {:className "btn-group btn-group-justified"}
                (dom/a
                 #js {:className "btn btn-primary"
                      :onClick (fn [e]
                                 (.preventDefault e)
                                 (om/transact! assignment
                                               #( assoc %
                                                  :state
                                                  :propose)))}
                 "Annuleren"))))])))))))

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
                     :style #js {:font-size "1200%"}} 50))
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
                                 (GET "https://live.mpare.net/users.json"
                                      {:handler handler}))}
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
      (dom/div nil
       (dom/div
        #js {:className "row"
             :style #js {:width "100%"
                         :text-align "center"}}
        (dom/h1 #js {:className "col-xs-12"
                     :style #js {:font-size "200%"}} "Opdracht 51 selectie"))
       (dom/div
        #js {:className "row"
             :style #js {:width "100%"
                         :text-align "center"}}
        (dom/h1 #js {:className "col-xs-12"
                     :style #js {:font-size "250%"}} "Ben je thuis?"))
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
                 "Ja")
                (dom/a
                 #js {:className "btn btn-primary"
                      :onClick (fn [e]
                                 (.preventDefault e)
                                 (om/transact! root
                                               #( assoc %
                                                  :state
                                                  next-state)))}
                 "Nee"))))))))


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
 (fn [{:keys [userid state] :as root} owner]
   (reify
     om/IRender
     (render [_]
       (dom/div
        #js {:className "container"}
        (dom/h2
            nil
            (dom/i #js {:className "fa fa-bolt"})
            " "
            "Where is my power!")
        (if (not userid)
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
