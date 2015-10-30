(ns drum-machine.state)

(def initial-state
  {:tracks
   [{:name "Kick"
     :source "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/61[kb]bass-kickers-2.wav.mp3"
     :play-on [1 3]
     :volume 1.0}
    {:name "Snare"
     :source "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/57[kb]acoustic_snare.aif.mp3"
     :play-on [2 4]
     :volume 1.0}
    {:name "Hi-Hat"
     :source "http://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/29[kb]909-squoosh-hat.aif.mp3"
     :play-on [1 2 3 4]
     :volume 0.1}]})
