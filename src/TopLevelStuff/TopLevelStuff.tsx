import { FC, useState } from "react"
import TitleSlide from "../TitleSlide"
import SettingsTab from "../SettingsTab"
import * as Tone from "tone"

type TopLevelStuffProps = {
  synth: Tone.PolySynth
  setSynth: (synth: Tone.PolySynth) => void
}

const TopLevelStuff: FC<TopLevelStuffProps> = ({ synth, setSynth }) => {
  const [isSettingsTabVisible, setIsSettingsTabVisible] = useState(false)

  return (
    <div className="flex flex-row h-fit min-h-[15vh] gap-5 justify-between items-center">
      <TitleSlide isSettingsVisible={isSettingsTabVisible} />
      <SettingsTab
        isSettingsTabVisible={isSettingsTabVisible}
        setIsSettingsTabVisible={setIsSettingsTabVisible}
        synth={synth}
        setSynth={setSynth}
      />
    </div>
  )
}

export default TopLevelStuff
