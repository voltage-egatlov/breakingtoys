import React, { FC, useState } from "react"
import knobSvg from "../Assets/Knob.svg"
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


type KnobProps = {
  selectableOptions: Array<string>,
  height: number
}
const Knob: FC<KnobProps> = ({
  selectableOptions,
  height
}) => {
  const [rotaryState, setRotaryState] = useState(0)
  const numOptions = selectableOptions.length
  const knobStyle = {
    transform: `rotate(${((270 / (numOptions - 1) * rotaryState)) + 136.5}deg)`,
    height: `${height*4.5}px`,
  }

  const handleOnClick = () => {
    if(rotaryState===numOptions-1){
      setRotaryState(0)
    }
    else{
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

  return (
    <div className="flex relative place-items-center">
      {  selectableOptions.map((option, index) => {
        const reversedIndex = numOptions - index - 1
        let xMod = 1, yMod = 1
        const degree = (270 / (numOptions - 1) * reversedIndex) + 45

        if (0 < degree && degree <= 90) {
          xMod = 1
          yMod = 1
        }
        else if (90 < degree && degree <= 180) {
          xMod = 1
          yMod = 1
        }
        else if (180 < degree && degree <= 270) {
          xMod = -1
          yMod = -1
        }
        else if (270 < degree && degree <= 360) {
          xMod = -1
          yMod = -1
        }
        const trigTan = Math.tan((degree) * Math.PI / 180)

        const z = height*2
        const y = (Math.sqrt((z ** 2) / ((trigTan ** 2) + 1))) * ((trigTan < 0) ? -1 : 1)
        const x = (y * trigTan)
        
        const placeStyle = {
          transform: `translate(${x * xMod}px, ${y * yMod}px)`,
        }
        const rotationDegree=(270 / (numOptions - 1)*index) +225

        const textRotation={
          rotate: `${rotationDegree}deg`,
        }
        const isSelected = rotaryState === index
        return (
          <div style={placeStyle} className="absolute w-full">
            <p style={textRotation} className={(isSelected)?`knob-text-selected`:`knob-text`} key={index}>
              {option}
            </p>
          </div>
        )
      }
      )}
      <ReactScrollWheelHandler
        upHandler={rotateCW}
        downHandler={rotateCCW}
        timeout={100}>
        <img style={knobStyle} src={knobSvg} draggable="false" className={"transition duration-[400ms] ease-in-out"} alt="knob" onClick={handleOnClick} />
      </ReactScrollWheelHandler>
    </div>
  )
}
//${getRotaryPosition()}
export default Knob
