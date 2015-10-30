(ns drum-machine.web-audio.remote
  (:require [ajax.core :refer [GET]]))

(defn load-into-buffer [ctx url {:keys [handler error-handler]}]
  (letfn [(complete [data]
            (println "complete" (count data)))
          (error [error]
            (println "error" error))]
    (GET url
         {:headers {"Authorization" "Token: 852ac849cc5fd97a09ab6906286cc52344fc4dfd"}
          :format :raw
          :handler complete
          :error-handler error})))
