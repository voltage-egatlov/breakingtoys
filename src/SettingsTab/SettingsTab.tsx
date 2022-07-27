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

  useEffect(() => {
    synth.releaseAll()
    setSynth(
      new Tone.PolySynth(Tone.Synth, {
        oscillator: {
          type: oscillators[oscillatorIndex],
        },
      }).toDestination(),
    )
  }, [oscillatorIndex]) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="top-tab-style gap-8">
      {isSettingsTabVisible && (
        <div className="flex">
          <Knob
            selectableOptions={oscillators}
            height={15}
            label="Oscillator"
            rotaryState={oscillatorIndex}
            setRotaryState={setOscillatorIndex}
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
