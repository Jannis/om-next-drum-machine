(ns drum-machine.components.track
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [drum-machine.util :refer [class-names]]))

(defui Track
  static om/Ident
  (ident [this props]
    [:track/by-name (:name props)])
  static om/IQuery
  (query [this]
    [:name :source :play-on])
  Object
  (toggle-beat [this n]
    (let [{:keys [play-on]} (om/props this)
          {:keys [update-fn]} (om/get-computed (om/props this))]
      (update-fn (om/get-ident this)
                 {:play-on (if (some #{n} play-on)
                             (remove #{n} play-on)
                             (conj play-on n))})))
  (render [this]
    (let [{:keys [name source play-on]} (om/props this)
          {:keys [bars beat]} (om/get-computed (om/props this))
          play (some #{beat} play-on)]
      (dom/div #js {:className "track"}
        (dom/h3 #js {:className "title"} name)
        (dom/div #js {:className "beats-container"}
          (dom/div #js {:className "beats"}
            (for [n (range 1 (inc (* bars 4)))]
              (dom/span #js {:key n
                             :className (class-names {:active (= beat n)})}
                (dom/audio #js {:id (str name n)
                                :src source
                                :preload "auto"})
                (dom/button
                  #js {:className
                       (class-names {:on (some #{n} play-on)
                                     :play (and (= beat n) play)})
                       :onClick
                       #(.toggle-beat this n)})))))
        (when play
          (some-> js/document
                  (.getElementById (str name beat))
                  (.play)))))))

(def track (om/factory Track {:keyfn :name}))
