import React, { FC, useState } from "react"

import * as Scale from "../model/scales"
import * as Note from "../model/note"
import * as Synth from "../model/synth"

import Keyboard from "./Keyboard"

const keyCodetoKeyIndex = (keyCode: string) => {
  switch (keyCode) {
    case "KeyZ":
      return 0
    case "KeyS":
      return 1
    case "KeyX":
      return 2
    case "KeyD":
      return 3
    case "KeyC":
      return 4
    case "KeyV":
      return 5
    case "KeyG":
      return 6
    case "KeyB":
      return 7
    case "KeyH":
      return 8
    case "KeyN":
      return 9
    case "KeyJ":
      return 10
    case "KeyM":
      return 11
    default:
      return -1
  }
}

const handlePlayNote = (note: Note.Note, octaveShift: number) => {
  Synth.triggerNote(Note.getNoteShifted(note, octaveShift))
}
const handleEndNote = (note: Note.Note, octaveShift: number) => {
  Synth.releaseNote(Note.getNoteShifted(note, octaveShift))
}

const keyCodeToOctave = (keyCode: string): number => {
  switch (keyCode) {
    case "ShiftRight":
      return 1
    case "ShiftLeft":
      return -1
    default:
      return 0
  }
}

const KeyboardHandler: FC = () => {
  const [octaveShift, setOctaveShift] = useState(0)
  const currentScale = Scale.getScale("A", "major")

  const [indexPlaying, setIndexPlaying] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currIndex = keyCodetoKeyIndex(event.code)
    if (keyCodeToOctave(event.code) && octaveShift === 0) {
      setOctaveShift(keyCodeToOctave(event.code))
    }
    if (keyCodetoKeyIndex(event.code) !== -1) {
      setIndexPlaying(oldArray => {
        const newArray = [...oldArray]
        newArray[currIndex] = true
        return newArray
      })
      if (indexPlaying[currIndex] === false) {
        handlePlayNote(currentScale[currIndex], octaveShift)
      }
    }
  }
  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currIndex = keyCodetoKeyIndex(event.code)
    if (keyCodeToOctave(event.code) !== 0 && octaveShift !== 0) {
      setOctaveShift(0)
    }
    if (keyCodetoKeyIndex(event.code) !== -1) {
      setIndexPlaying(oldArray => {
        const newArray = [...oldArray]
        newArray[currIndex] = false
        return newArray
      })
      handleEndNote(currentScale[currIndex], octaveShift)
    }
  }

  return (
    <div
      className="justify-center self-center flex flex-col h-screen w-screen"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <Keyboard
        currentScale={currentScale}
        indexPlaying={indexPlaying}
        setIndexPlaying={setIndexPlaying}
        octaveShift={octaveShift}
      />
    </div>
  )
}

export default KeyboardHandler
