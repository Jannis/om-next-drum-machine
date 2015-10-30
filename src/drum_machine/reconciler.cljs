(ns drum-machine.reconciler
  (:require [om.next :as om]
            [drum-machine.state :refer [initial-state]]))

(defmulti read om/dispatch)

(defmulti mutate om/dispatch)

(def parser
  (om/parser {:read read :mutate mutate}))

(def reconciler
  (om/reconciler {:state initial-state
                  :parser parser}))

(defn parse [query]
  (parser {:state (om/app-state reconciler)} query))
