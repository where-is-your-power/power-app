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

(defonce app-state
  (atom {:userid nil
         :deviceready false
         :assignment {:title "Test"}
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
            #js {:type "button"
                 :className "btn btn-primary"
                 :onClick
                 (fn [e]
                   (let [name (.-value (om/get-node owner "name"))]
                     (.preventDefault e)
                     (om/transact! root #(assoc %
                                           :userid "test"
                                           :name name))))}
            "Inloggen")))))))))

(defn assignment-component [{:keys []
                             {:keys [title]} :assignment
                             :as root} owner opts]
  (reify
    om/IRenderState
    (render-state [_ _]
      (dom/div
       nil
       (dom/h2 nil title)
       (create-settings-button root
                               period-enum
                               [:settings :period])
       (create-settings-button root
                               difficulty-enum
                               [:settings :difficulty])))))

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
