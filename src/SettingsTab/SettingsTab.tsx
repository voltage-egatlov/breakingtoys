import { FC, useEffect, useState } from "react"
import { CogIcon } from "@heroicons/react/outline"
import { Knob } from "../UI"
import * as Tone from "tone"

type SettingsTabProps = {
  isSettingsTabVisible: boolean
  setIsSettingsTabVisible: (isSettingsTabVisible: boolean) => void
  synth: Tone.PolySynth
  setSynth: (synth: Tone.PolySynth) => void
}

const SettingsTab: FC<SettingsTabProps> = ({
  isSettingsTabVisible,
  setIsSettingsTabVisible,
  synth,
  setSynth,
}) => {
  const settingButtonClassName =
    "transition duration-700 h-8 md:h-14 lg:h-16 text-back-blue"
  const settingsButtonClassNamePressed = settingButtonClassName + " -rotate-90"

  const handleOnClickSettingsButton = () => {
    setIsSettingsTabVisible(!isSettingsTabVisible)
  }
  const [oscillatorIndex, setOscillatorIndex] = useState(0)
  type NonCustomOscillatorType = Exclude<OscillatorType, "custom">

  const oscillators: NonCustomOscillatorType[] = [
    "sine",
    "sawtooth",
    "square",
    "triangle",
  ]

  const numericalOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [attackIndex, setAttackIndex] = useState(0)
  const [releaseIndex, setReleaseIndex] = useState(0)
  const [sustainIndex, setSustainIndex] = useState(5)
  const [decayIndex, setDecayIndex] = useState(5)
  const [volumeIndex, setVolumeIndex] = useState(5)
  /* eslint-disable */
  useEffect(() => {
    synth.releaseAll()
    setSynth(
      synth.set({
        envelope: {
          attack: attackIndex / 10 + 0,
          release: releaseIndex / 10 + 0.2,
          sustain: sustainIndex / 10,
          decay: decayIndex / 10,
        },
        oscillator: {
          type: oscillators[oscillatorIndex],
          volume: -30,
        },
        volume: volumeIndex * 3,
      }),
    )
  }, [
    oscillatorIndex,
    attackIndex,
    releaseIndex,
    volumeIndex,
    sustainIndex,
    decayIndex,
  ])
  /* eslint-enable */

  return (
    <div className="top-tab-style gap-8">
      {isSettingsTabVisible && (
        <div className="flex gap-4">
          <Knob
            selectableOptions={oscillators}
            height={15}
            label="Oscillator"
            rotaryState={oscillatorIndex}
            setRotaryState={setOscillatorIndex}
          />
          <Knob
            selectableOptions={numericalOptions}
            height={15}
            label="Attack"
            rotaryState={attackIndex}
            setRotaryState={setAttackIndex}
          />
          <Knob
            selectableOptions={numericalOptions}
            height={15}
            label="Release"
            rotaryState={releaseIndex}
            setRotaryState={setReleaseIndex}
          />
          <Knob
            selectableOptions={numericalOptions}
            height={15}
            label="Sustain"
            rotaryState={sustainIndex}
            setRotaryState={setSustainIndex}
          />
          <Knob
            selectableOptions={numericalOptions}
            height={15}
            label="Decay"
            rotaryState={decayIndex}
            setRotaryState={setDecayIndex}
          />
          <Knob
            selectableOptions={numericalOptions}
            height={15}
            label="Volume"
            rotaryState={volumeIndex}
            setRotaryState={setVolumeIndex}
          />
        </div>
      )}
      <div
        className={`transition self-center bg-back-white rounded-full border-4 border-gray-300`}
      >
        <CogIcon
          className={
            isSettingsTabVisible
              ? settingsButtonClassNamePressed
              : settingButtonClassName
          }
          onClick={handleOnClickSettingsButton}
        />
      </div>
    </div>
  )
}

export default SettingsTab
