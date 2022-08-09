import { FC, useState } from "react"
import TitleSlide from "../TitleSlide"
import SettingsTab from "./SettingsTab"
import * as Tone from "tone"

type TopLevelStuffProps = {
  synth: Tone.PolySynth
  setSynth: (synth: Tone.PolySynth) => void
}

const TopLevelStuff: FC<TopLevelStuffProps> = ({ synth, setSynth }) => {
  const [isSettingsTabVisible, setIsSettingsTabVisible] = useState(false)

  return (
    <div className="flex flex-row h-fit min-h-[15vh] gap-5 justify-between">
      <div className="h-full">
        <TitleSlide isSettingsVisible={isSettingsTabVisible} />
      </div>
      <div className="h-full flex-row">
        <SettingsTab
          isSettingsTabVisible={isSettingsTabVisible}
          setIsSettingsTabVisible={setIsSettingsTabVisible}
          synth={synth}
          setSynth={setSynth}
        />
      </div>
    </div>
  )
}

export default TopLevelStuff
