(ns drum-machine.web-audio.core)

;;;; Protocols

(defprotocol IAudioNode)

(defprotocol IOscillator
  (set-frequency [this freq])
  (start [this]))

(defprotocol IAudioContext
  (create-oscillator [this])
  (create-gain [this])
  (current-time [this])
  (destination [this]))

(defprotocol IGain)

;;;; Gain

(deftype Gain [ctx obj])

;;;; Oscillator

(deftype Oscillator [ctx obj]
  IOscillator
  (set-frequency [this freq]
    (.. obj -frequency (setValueAtTime freq (current-time ctx))))
  (start [this]
    (.. obj start)))

;;;; AudioContext

(deftype AudioContext [obj]
  IAudioContext
  (create-oscillator [this]
    (Oscillator. this (.. obj createOscillator)))
  (create-gain [this]
    (Gain. this (.. obj createGain)))
  (current-time [this]
    (.. obj -currentTime))
  (destination [this]
    (.. obj -destination)))

(defn create-context []
  (AudioContext. (js/. (or js/window.AudioContext
                           js/window.webkitAudioContext))))

;;;; Generic functions for audio nodes

(defn connect [x y]
  (.connect (.-obj x) (.-obj y)))

(defn connect-destination [x]
  (.connect (.-obj x) (destination (.-ctx x))))
