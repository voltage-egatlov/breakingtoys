import { FC, useEffect, useState } from "react"
import { PaperAirplaneIcon } from "@heroicons/react/outline"
import { Knob, Switch } from "../../../UI"
import * as Arpeggio from "../../../model/arpeggio"

type ArpegiatorTabProps = {
  isArpeggiatorTabVisible: boolean
  setIsArpeggiatorTabVisible: (isArpeggiatorTabVisible: boolean) => void
  setIsSettingsTabVisible: (isSettingsTabVisible: boolean) => void
  isArpeggiatorOn: boolean
  setIsArpeggiatorOn: (isArpeggiatorOn: boolean) => void
  arpOctaves: number
  setArpOctaves: (arpOctaves: number) => void
  arpDirection: string
  setArpDirection: (arpDirection: string) => void
  isArpeggiatorPlaying: boolean
}

const ArpegiatorTab: FC<ArpegiatorTabProps> = ({
  isArpeggiatorTabVisible,
  setIsArpeggiatorTabVisible,
  setIsSettingsTabVisible,
  isArpeggiatorOn,
  setIsArpeggiatorOn,
  arpOctaves,
  setArpOctaves,
  arpDirection,
  setArpDirection,
  isArpeggiatorPlaying,
}) => {
  const arpeggiatorButtonClassName =
    " self-centertransition ease-in duration-300 h-6 md:h-12 lg:h-14 p-1 lg:p-2 text-back-white"
  const arpeggiatorButtonClassNamePressed =
    arpeggiatorButtonClassName + " -rotate-90 text-back-blue"

  const handleOnClickArpeggiatorButton = () => {
    setIsArpeggiatorTabVisible(!isArpeggiatorTabVisible)
    setIsSettingsTabVisible(false)
  }

  const octaveOptions = [1, 2, 3]

  const speedOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [speed, setSpeed] = useState(1)

  const directionOptions = ["up", "down", "updown", "random"]
  const [direction, setDirection] = useState(1)

  /*eslint-disable*/
  useEffect(() => {
    Arpeggio.setPlaybackRate(speed)
    setArpDirection(directionOptions[direction])
  }, [speed, direction])
  /*eslint-enable*/
  return (
    <div className="top-tab-style gap-4 p-2 h-full">
      {isArpeggiatorTabVisible && (
        <div className="flex items-center space-x-3">
          <Switch
            label="Arpeggiator"
            switchState={isArpeggiatorOn}
            setSwitchState={setIsArpeggiatorOn}
          />
          {isArpeggiatorOn && (
            <>
              <Knob
                selectableOptions={octaveOptions}
                label="Octaves"
                rotaryState={arpOctaves}
                setRotaryState={setArpOctaves}
                height={20}
                disabled={isArpeggiatorPlaying}
              />
              <Knob
                selectableOptions={speedOptions}
                label="Speed"
                rotaryState={speed}
                setRotaryState={setSpeed}
                height={20}
              />
              <Knob
                selectableOptions={directionOptions}
                label="Direction"
                rotaryState={direction}
                setRotaryState={setDirection}
                height={20}
                disabled={isArpeggiatorPlaying}
              />
            </>
          )}
        </div>
      )}
      <div
        className={`transition duration-300 ease-in bg-back-blue rounded-full border-4 border-gray-300 ${
          isArpeggiatorTabVisible ? "bg-back-white shadow-settings" : ""
        }`}
      >
        <PaperAirplaneIcon
          className={
            isArpeggiatorTabVisible
              ? arpeggiatorButtonClassNamePressed
              : arpeggiatorButtonClassName
          }
          onClick={handleOnClickArpeggiatorButton}
        />
      </div>
    </div>
  )
}

export default ArpegiatorTab
