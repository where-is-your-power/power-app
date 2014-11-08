(ns power-app.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defonce app-state (atom {:deviceready false
                          :text "Hello Chestnut!"}))

(.addEventListener js/document
                   "deviceready"
                   (fn []
                     (swap! app-state #(assoc % :deviceready true))))

(defn main []
  (.log js/console "starting CLJS...")
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div
           nil
           (dom/h1 nil (:text app))
           (pr-str app)))))
    app-state
    {:target (. js/document (getElementById "app"))}))

(main)
