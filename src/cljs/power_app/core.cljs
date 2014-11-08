(ns power-app.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defonce app-state
  (atom {:deviceready false
         :current-page :home}))

(.addEventListener
 js/document
 "deviceready"
 (fn []
   (swap! app-state #(assoc % :deviceready true))))


(om/root
 (fn [app owner]
   (reify
     om/IRender
     (render [_]
       (dom/div
        #js {:className "container"}
        (dom/div
         #js {:className "row"}
         (dom/div #js {:className "col-xs-6"} "Test Links")
         (dom/div #js {:className "col-xs-6"} "Test Rechts"))
        (dom/div
         #js {:className "row"}
         (dom/div
          #js {:className "col-xs-12"}
          (dom/hr nil)
          (pr-str app)))))))
 app-state
 {:target (. js/document (getElementById "app"))})
