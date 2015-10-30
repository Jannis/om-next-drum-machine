(ns drum-machine.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! timeout]]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [drum-machine.reconciler :refer [parse reconciler]]
            [drum-machine.parsing.settings :as settings]
            [drum-machine.parsing.tracks :as tracks]
            [drum-machine.components.track :refer [Track track]]))

(enable-console-print!)

;;;; App

(defui App
  static om/IQuery
  (query [this]
    [:settings/bpm
     :settings/bars
     :settings/beat
     {:tracks (om/get-query Track)}])
  Object
  (set-bpm [this value]
    (om/transact! this `[(settings/set-bpm {:value ~value})]))
  (set-bars [this value]
    (om/transact! this `[(settings/set-bars {:value ~value})]))
  (update-track [this ref props]
    (om/transact! this `[(tracks/update {:ref ~ref :props ~props})]))
  (render [this]
    (let [{:keys [settings/bpm settings/bars settings/beat]} (om/props this)]
      (dom/div #js {:className "app"}
        (dom/h1 nil "Om Next Drum Machine")
        (dom/h2 nil "Settings")
        (dom/form #js {:className "settings"}
          (dom/p #js {:className "setting"}
            (dom/label nil "BPM")
            (dom/input #js {:type "range" :min 30 :max 120 :value bpm
                            :onChange #(.set-bpm this (.. % -target -value))})
            (dom/span nil bpm))
          (dom/p #js {:className "setting"}
            (dom/label nil "Bars")
            (dom/input #js {:type "range" :min 1 :max 4 :value bars
                            :onChange #(.set-bars this (.. % -target -value))})
            (dom/span nil bars)))
        (dom/h2 nil "Tracks")
        (dom/div #js {:className "tracks"}
          (for [t (:tracks (om/props this))]
            (track (om/computed t {:bars bars
                                   :beat beat
                                   :update-fn
                                   #(.update-track this %1 %2)}))))))))

(defn run []
  ;; Beat generator
  (go
    (<! (timeout 1000))
    (loop []
      (let [bpm (-> (parse [:settings/bpm]) :settings/bpm)]
        (<! (timeout (-> 60.0 (/ bpm) (* 1000))))
        (om/transact! reconciler `[(settings/next-beat)]))
      (recur)))

  ;; Render the application
  (om/add-root! reconciler
                App
                (.. js/document (getElementById "app"))))
