(ns power-app.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

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
         :assignment {:type :challenge
                      :state :propose
                      :title "Test"
                      :description "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi leo, varius cursus ipsum eu, vehicula tincidunt massa. Nulla et erat vel tellus porttitor malesuada quis quis magna. Curabitur et pellentesque urna. Aliquam tristique dolor erat, quis feugiat mauris rhoncus non. Quisque tincidunt euismod enim, id luctus arcu. Aliquam erat volutpat. Nulla egestas purus ligula, id luctus velit mollis sollicitudin. Sed suscipit et nisl quis ullamcorper. Proin convallis auctor iaculis. Donec nec ligula rutrum, vehicula erat vel, fermentum lorem. "
                      :data {:value 78}}
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
                     #(assoc-in % path k)))}
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

(om/root
 (fn [{:keys [userid] :as root} owner]
   (reify
     om/IRender
     (render [_]
       (dom/div
        #js {:className "container"}
        (dom/h1
            nil
            (dom/i #js {:className "fa fa-bolt"})
            " "
            "Where is my power!")
        (if (not userid)
          (om/build login-component root)
          (om/build assignment-component root))
        (dom/div
         #js {:className "row"}
         (dom/div
          #js {:className "col-xs-12"}
          (dom/hr nil)
          (pr-str root)))))))
 app-state
 {:target (. js/document (getElementById "app"))})
