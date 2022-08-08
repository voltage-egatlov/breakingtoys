import React, { FC } from "react"
import knobPng from "../Assets/Knob.png"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

type KnobProps = {
  selectableOptions: Array<string> | Array<number>
  height: number
  label: string
  rotaryState: number
  setRotaryState: (state: number) => void
}
const Knob: FC<KnobProps> = ({
  selectableOptions,
  height,
  label,
  rotaryState,
  setRotaryState,
}) => {
  const numOptions = selectableOptions.length
  const knobScalar = 3
  const knobStyle = {
    transform: `rotate(${(270 / (numOptions - 1)) * rotaryState + 136.5}deg)`,
    height: height * knobScalar,
    width: height * knobScalar,
    minWidth: height * knobScalar,
    minHeight: height * knobScalar,
  }

  const handleOnClick = () => {
    if (rotaryState === numOptions - 1) {
      setRotaryState(0)
    } else {
      rotateCW()
    }
  }

  const rotateCW = () => {
    if (rotaryState < numOptions - 1) {
      setRotaryState(rotaryState + 1)
    }
  }
  const rotateCCW = () => {
    if (rotaryState > 0) {
      setRotaryState(rotaryState - 1)
    }
  }

  const labelStyle = {
    transform: `translate(0px, ${height * 4}px)`,
  }

  return (
    <div className="self-centerflex flex-col relative">
      <h1
        className="lowercase border text-back-white shadow-label-inset rounded-full p-1 self-center text-xs select-none"
        style={labelStyle}
      >
        {label}
      </h1>
      <div className="flex relative place-items-center">
        {selectableOptions.map((option, index) => {
          const reversedIndex = numOptions - index - 1
          let xMod = 1,
            yMod = 1
          const degree = (270 / (numOptions - 1)) * reversedIndex + 45

          if (0 < degree && degree <= 90) {
            xMod = 1
            yMod = 1
          } else if (90 < degree && degree <= 180) {
            xMod = 1
            yMod = 1
          } else if (180 < degree && degree <= 270) {
            xMod = -1
            yMod = -1
          } else if (270 < degree && degree <= 360) {
            xMod = -1
            yMod = -1
          }
          const trigTan = Math.tan((degree * Math.PI) / 180)

          const z = height * 1.5
          const y =
            Math.sqrt(z ** 2 / (trigTan ** 2 + 1)) * (trigTan < 0 ? -1 : 1)
          const x = y * trigTan

          const placeStyle = {
            transform: `translate(${x * xMod}px, ${y * yMod}px)`,
          }
          const rotationDegree = (270 / (numOptions - 1)) * index + 225

          const textRotation = {
            rotate: `${rotationDegree}deg`,
          }
          const isSelected = rotaryState === index
          return (
            <div style={placeStyle} className="absolute w-full" key={index}>
              <p
                style={textRotation}
                className={`select-none ${
                  isSelected ? `knob-text-selected select-` : `knob-text`
                }`}
                key={index}
              >
                {option}
              </p>
            </div>
          )
        })}
        <ReactScrollWheelHandler
          upHandler={rotateCW}
          downHandler={rotateCCW}
          timeout={100}
        >
          <img
            style={knobStyle}
            src={knobPng}
            draggable="false"
            className={"transition duration-[400ms] ease-in-out select-none"}
            alt="knob"
            onClick={handleOnClick}
          />
        </ReactScrollWheelHandler>
      </div>
    </div>
  )
}
//${getRotaryPosition()}
export default Knob
