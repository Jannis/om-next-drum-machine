(ns drum-machine.parsing.settings
  (:require [drum-machine.reconciler :refer [mutate read]]))

(defn get-bpm [st key]
  (or (get st key) 60))

(defmethod read :settings/bpm
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-bpm st key)}))

(defmethod mutate 'settings/set-bpm
  [{:keys [state]} _ {:keys [value]}]
  {:value [:settings/bpm]
   :action #(swap! state assoc :settings/bpm value)})

(defn get-bars [st key]
  (or (get st key) 1))

(defmethod read :settings/bars
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-bars st key)}))

(defmethod mutate 'settings/set-bars
  [{:keys [state]} _ {:keys [value]}]
  {:value [:settings/bars]
   :action #(swap! state assoc :settings/bars value)})

(defn get-beat [st key]
  (or (get st key) 1))

(defmethod read :settings/beat
  [{:keys [state]} key _]
  (let [st @state]
    {:value (get-beat st key)}))

(defmethod mutate 'settings/next-beat
  [{:keys [state]} _ _]
  (let [st @state]
    (letfn [(next-beat [beat]
              (if (< beat (-> (get-bars st :settings/bars) (* 4)))
                (inc beat)
                1))]
      {:value [:settings/beat]
       :action #(swap! state update :settings/beat next-beat)})))
