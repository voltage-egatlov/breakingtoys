import { FC } from "react"
import { useState } from "react"
import KeyboardHandler from "../KeyboardHandler"
import TopLevelStuff from "../TopLevelStuff"
import * as Tone from "tone"
import * as Effects from "../model/effects"

const SynthView: FC = () => {
  const [synth, setSynth] = useState<Tone.PolySynth>(
    Effects.startEffects(new Tone.PolySynth(Tone.Synth).toDestination()),
  )

  return (
    <div className="flex flex-col justify-center space-y-2 py-2">
      <TopLevelStuff synth={synth} setSynth={setSynth} />
      <KeyboardHandler synth={synth} />
    </div>
  )
}

export default SynthView
