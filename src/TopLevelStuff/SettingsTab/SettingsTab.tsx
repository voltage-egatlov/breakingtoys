import { FC, useEffect, useState } from "react"
import { CogIcon } from "@heroicons/react/outline"
import { Knob } from "../../UI"
import { Switch } from "../../UI"
import * as Tone from "tone"
import * as Effects from "../../model/effects"
import KnobPages from "./KnobPages"

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
    "transition ease-in duration-300 h-8 md:h-14 lg:h-16 text-back-white"
  const settingsButtonClassNamePressed =
    settingButtonClassName + " -rotate-90 text-back-blue"

  const handleOnClickSettingsButton = () => {
    setIsSettingsTabVisible(!isSettingsTabVisible)
  }

  const [currentPage, setCurrentPage] = useState(1)

  type NonCustomOscillatorType = Exclude<OscillatorType, "custom">

  const oscillators: NonCustomOscillatorType[] = [
    "sine",
    "sawtooth",
    "square",
    "triangle",
  ]
  const numericalOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const knobWidth = 20

  const [oscillatorIndex, setOscillatorIndex] = useState(0)
  const [attackIndex, setAttackIndex] = useState(0)
  const [releaseIndex, setReleaseIndex] = useState(0)
  const [sustainIndex, setSustainIndex] = useState(5)
  const [decayIndex, setDecayIndex] = useState(5)
  const [volumeIndex, setVolumeIndex] = useState(3)

  const [chorusOn, setChorusOn] = useState(false)
  const [reverbOn, setReverbOn] = useState(false)
  const [delayOn, setDelayOn] = useState(false)
  const [distortionOn, setDistortionOn] = useState(false)
  const [phaserOn, setPhaserOn] = useState(false)

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
  useEffect(() => {
    synth.releaseAll()

    chorusOn ? Effects.setChorusOn() : Effects.setChorusOff()
    reverbOn ? Effects.setReverbOn() : Effects.setReverbOff()
    delayOn ? Effects.setDelayOn() : Effects.setDelayOff()
    distortionOn ? Effects.setDistortionOn() : Effects.setDistortionOff()
    phaserOn ? Effects.setPhaserOn() : Effects.setPhaserOff()

    Effects.updateEffects(synth)
  }, [chorusOn, reverbOn, delayOn, distortionOn, phaserOn])

  /* eslint-enable */

  return (
    <div className="top-tab-style gap-4 place-self-end p-2 h-full">
      {isSettingsTabVisible && (
        <div className="flex">
          <KnobPages
            pageLabel="Oscillator Settings"
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            index={0}
            firstPage
          >
            <Knob
              selectableOptions={["sin", "saw", "sqr", "tri"]}
              height={knobWidth}
              label="Oscillator"
              rotaryState={oscillatorIndex}
              setRotaryState={setOscillatorIndex}
            />
          </KnobPages>
          <KnobPages
            pageLabel="Envelope Settings"
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            index={1}
          >
            <Knob
              selectableOptions={numericalOptions}
              height={knobWidth}
              label="Attack"
              rotaryState={attackIndex}
              setRotaryState={setAttackIndex}
            />
            <Knob
              selectableOptions={numericalOptions}
              height={knobWidth}
              label="Release"
              rotaryState={releaseIndex}
              setRotaryState={setReleaseIndex}
            />
            <Knob
              selectableOptions={numericalOptions}
              height={knobWidth}
              label="Sustain"
              rotaryState={sustainIndex}
              setRotaryState={setSustainIndex}
            />
            <Knob
              selectableOptions={numericalOptions}
              height={knobWidth}
              label="Decay"
              rotaryState={decayIndex}
              setRotaryState={setDecayIndex}
            />
          </KnobPages>
          <KnobPages
            pageLabel="Effects Settings"
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            index={2}
          >
            <Switch
              label="Phaser"
              switchState={phaserOn}
              setSwitchState={setPhaserOn}
              isLinked={false}
            />
            <Switch
              label="Delay"
              switchState={delayOn}
              setSwitchState={setDelayOn}
              isLinked={false}
            />
            <Switch
              label="Distortion"
              switchState={distortionOn}
              setSwitchState={setDistortionOn}
              isLinked={false}
            />
            <Switch
              label="Reverb"
              switchState={reverbOn}
              setSwitchState={setReverbOn}
              isLinked={false}
            />
            <Switch
              label="Chorus"
              switchState={chorusOn}
              setSwitchState={setChorusOn}
              isLinked={false}
            />
          </KnobPages>
          <KnobPages
            pageLabel="Volume Settings"
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            index={3}
            lastPage
          >
            <Knob
              selectableOptions={numericalOptions}
              height={knobWidth}
              label="Volume"
              rotaryState={volumeIndex}
              setRotaryState={setVolumeIndex}
            />
          </KnobPages>
        </div>
      )}
      <div
        className={`transition duration-300 ease-in bg-back-blue rounded-full border-4 border-gray-300 ${
          isSettingsTabVisible ? "bg-back-white shadow-settings" : ""
        }`}
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
