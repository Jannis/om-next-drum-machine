(ns drum-machine.state)

(def initial-state
  {:tracks
   [{:name "Kick"
     :source "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/61[kb]bass-kickers-2.wav.mp3"
     :play-on [1 3]}
    {:name "Snare"
     :source "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/57[kb]acoustic_snare.aif.mp3"
     :play-on [2 4]}]})
