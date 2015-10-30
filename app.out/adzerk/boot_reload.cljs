(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] drum-machine.app))
(client/connect "ws://localhost:34162" {:on-jsload (fn* [] (drum-machine.app/run))})