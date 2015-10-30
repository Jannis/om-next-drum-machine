#!/usr/bin/env boot

(set-env!
  :source-paths #{"less" "src"}
  :resource-paths #{"html" "resources"}
  :dependencies '[; Boot setup
                  [adzerk/boot-cljs "1.7.48-6"]
                  [adzerk/boot-reload "0.4.1"]
                  [deraen/boot-less "0.4.2"]
                  [pandeiro/boot-http "0.7.0-SNAPSHOT"]

                  ; App dependencies
                  [cljs-ajax "0.5.1"]
                  [org.clojure/clojurescript "1.7.145"]
                  [org.omcljs/om "1.0.0-alpha13-SNAPSHOT"]])

(task-options!
  pom {:project "om-next-drum-machine"
       :version "0.1.0-SNAPSHOT"})

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-reload :refer [reload]]
         '[deraen.boot-less :refer [less]]
         '[pandeiro.boot-http :refer [serve]])

(deftask run
  []
  (comp
    (watch)
    (speak)
    (reload :on-jsload 'drum-machine.app/run)
    (less)
    (cljs :source-map true
          :optimizations :none)
    (serve :dir "target")))
