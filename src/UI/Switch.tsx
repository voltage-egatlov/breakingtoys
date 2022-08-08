import React, { FC } from "react"
import switchOn from "../Assets/switchOn.png"
import switchOff from "../Assets/switchOff.png"

type KnobProps = {
  label: string
  switchState: boolean
  setSwitchState: (state: boolean) => void
  isLinked?: boolean
}
const Switch: FC<KnobProps> = ({
  label,
  switchState,
  setSwitchState,
  isLinked,
}) => {
  const handleClick = () => {
    setSwitchState(!switchState)
  }
  const switchClass = "h-14 aspect-auto"
  const labelClass = `lowercase text-back-white rounded-full self-center px-2 py-1 text-xs select-none border transition shadow-label-inset ${
    isLinked ? "hover:translate-x-1" : ""
  }`
  return (
    <div className="self-center flex flex-col items-center space-y-1">
      {switchState ? (
        <img
          src={switchOn}
          className={switchClass}
          onClick={handleClick}
          alt=""
        />
      ) : (
        <img
          src={switchOff}
          className={switchClass}
          onClick={handleClick}
          alt=""
        />
      )}
      <label className={labelClass}>{label}</label>
    </div>
  )
}
export default Switch
