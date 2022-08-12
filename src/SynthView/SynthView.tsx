import { FC } from "react"
import { useState } from "react"
import KeyboardHandler from "./BottomLevelStuff/KeyboardHandler"
import TopLevelStuff from "./TopLevelStuff"
import * as Tone from "tone"
import * as Effects from "../model/effects"
import ArpeggioHandler from "./BottomLevelStuff/ArpeggioHandler"
import * as Arpeggio from "../model/arpeggio"

const SynthView: FC = () => {
  const [synth, setSynth] = useState<Tone.PolySynth>(
    Effects.startEffects(new Tone.PolySynth(Tone.Synth).toDestination()),
  )
  const [isArpeggiatorOn, setIsArpeggiatorOn] = useState(false)
  const [octave, setOctave] = useState(0)

  const [arpOctaves, setArpOctaves] = useState(1)
  const [arpDirection, setArpDirection] = useState("up")
  const [isArpeggiatorPlaying, setIsArpeggiatorPlaying] = useState(false)

  if (!isArpeggiatorOn) {
    Arpeggio.stopArpeggio()
  }

  return (
    <div className="flex flex-col justify-center space-y-2 py-2">
      <TopLevelStuff
        synth={synth}
        setSynth={setSynth}
        isArpeggiatorOn={isArpeggiatorOn}
        setIsArpeggiatorOn={setIsArpeggiatorOn}
        arpOctaves={arpOctaves}
        setArpOctaves={setArpOctaves}
        arpDirection={arpDirection}
        setArpDirection={setArpDirection}
        isArpeggiatorPlaying={isArpeggiatorPlaying}
      />
      {isArpeggiatorOn ? (
        <ArpeggioHandler
          synth={synth}
          octave={octave}
          setOctave={setOctave}
          arpOctaves={arpOctaves}
          setArpOctaves={setArpOctaves}
          arpDirection={arpDirection}
          isArpeggiatorPlaying={isArpeggiatorPlaying}
          setIsArpeggiatorPlaying={setIsArpeggiatorPlaying}
        />
      ) : (
        <KeyboardHandler synth={synth} octave={octave} setOctave={setOctave} />
      )}
    </div>
  )
}

export default SynthView
