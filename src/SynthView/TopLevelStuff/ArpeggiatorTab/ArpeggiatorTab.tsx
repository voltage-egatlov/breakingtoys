import { FC } from "react"
import { PaperAirplaneIcon } from "@heroicons/react/outline"
import { Switch } from "../../../UI"

type ArpegiatorTabProps = {
  isArpeggiatorTabVisible: boolean
  setIsArpeggiatorTabVisible: (isArpeggiatorTabVisible: boolean) => void
  setIsSettingsTabVisible: (isSettingsTabVisible: boolean) => void
  isArpeggiatorOn: boolean
  setIsArpeggiatorOn: (isArpeggiatorOn: boolean) => void
}

const ArpegiatorTab: FC<ArpegiatorTabProps> = ({
  isArpeggiatorTabVisible,
  setIsArpeggiatorTabVisible,
  setIsSettingsTabVisible,
  isArpeggiatorOn,
  setIsArpeggiatorOn,
}) => {
  const arpeggiatorButtonClassName =
    " self-centertransition ease-in duration-300 h-6 md:h-12 lg:h-14 p-1 lg:p-2 text-back-white"
  const arpeggiatorButtonClassNamePressed =
    arpeggiatorButtonClassName + " -rotate-90 text-back-blue"

  const handleOnClickArpeggiatorButton = () => {
    setIsArpeggiatorTabVisible(!isArpeggiatorTabVisible)
    setIsSettingsTabVisible(false)
  }
  return (
    <div className="top-tab-style gap-4 p-2 h-full">
      {isArpeggiatorTabVisible && (
        <div className="flex">
          <Switch
            label="Arpeggiator"
            switchState={isArpeggiatorOn}
            setSwitchState={setIsArpeggiatorOn}
          />
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
