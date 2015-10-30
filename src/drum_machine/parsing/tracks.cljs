(ns drum-machine.parsing.tracks
  (:require [om.next :as om]
            [drum-machine.reconciler :refer [mutate read]]))

(defmethod read :tracks
  [{:keys [state selector]} key _]
  (let [st @state]
    {:value (om/denormalize selector (get st key) st)}))

(defmethod mutate 'tracks/update
  [{:keys [state]} _ {:keys [ref props]}]
  {:value [:tracks]
   :action #(swap! state update-in ref merge props)})
