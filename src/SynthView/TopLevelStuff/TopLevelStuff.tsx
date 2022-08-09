import { FC, useState } from "react"
import TitleSlide from "./TitleSlide"
import SettingsTab from "./SettingsTab"
import * as Tone from "tone"
import ArpeggiatorTab from "./ArpeggiatorTab"

type TopLevelStuffProps = {
  synth: Tone.PolySynth
  setSynth: (synth: Tone.PolySynth) => void
  isArpeggiatorOn: boolean
  setIsArpeggiatorOn: (isArpeggiatorOn: boolean) => void
}

const TopLevelStuff: FC<TopLevelStuffProps> = ({
  synth,
  setSynth,
  isArpeggiatorOn,
  setIsArpeggiatorOn,
}) => {
  const [isSettingsTabVisible, setIsSettingsTabVisible] = useState(false)
  const [isArpeggiatorTabVisible, setIsArpeggiatorTabVisible] = useState(false)

  return (
    <div className="flex flex-row h-fit min-h-[15vh] gap-5 justify-between">
      <div className="h-full">
        <TitleSlide
          isOtherTabVisible={isSettingsTabVisible || isArpeggiatorTabVisible}
        />
      </div>
      <div className="h-full flex space-x-3">
        <ArpeggiatorTab
          isArpeggiatorTabVisible={isArpeggiatorTabVisible}
          setIsArpeggiatorTabVisible={setIsArpeggiatorTabVisible}
          setIsSettingsTabVisible={setIsSettingsTabVisible}
          isArpeggiatorOn={isArpeggiatorOn}
          setIsArpeggiatorOn={setIsArpeggiatorOn}
        />
        <SettingsTab
          isSettingsTabVisible={isSettingsTabVisible}
          setIsSettingsTabVisible={setIsSettingsTabVisible}
          setIsArpeggiatorTabVisible={setIsArpeggiatorTabVisible}
          synth={synth}
          setSynth={setSynth}
        />
      </div>
    </div>
  )
}

export default TopLevelStuff
