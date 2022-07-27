import React, { FC, useState } from "react"

import * as SolidIcons from '@heroicons/react/solid'

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

const handlePlayNote = (note: Note.Note, octave: number) => {
  Synth.triggerNote(Note.getNoteShifted(note, octave))
}
const handleEndNote = (note: Note.Note, octave: number) => {
  Synth.releaseNote(Note.getNoteShifted(note, octave))
}

const keyCodeToOctave = (keyCode: string): number => {
  switch (keyCode) {
    case "Comma":
      return -1
    case "Period":
      return 1
    default:
      return 0
  }
}

const octaveToOpacity = (octave: number): string => {
  switch (octave) {
    case 0:
      return "opacity-100 text-sky-500"
    case 1:
      return "opacity-80 text-sky-400"
    case 2:
      return "opacity-60 text-sky-300"
    case 3:
      return "opacity-50 text-sky-200"
    case 4:
      return "opacity-30 text-sky-100"
    case 5:
      return "opacity-50 text-sky-200"
    case 6:
      return "opacity-60 text-sky-300"
    case 7:
      return "opacity-80 text-sky-400"
    case 8:
      return "opacity-100 text-sky-500"
    default:
      return "opacity-30 text-sky-100"
  }
}
const KeyboardHandler: FC = () => {
  const [octave, setOctave] = useState(4)
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
    if (keyCodeToOctave(event.code) === -1 && octave > 0) {
      Synth.releasAllNotes()
      setOctave(octave + keyCodeToOctave(event.code))
    }
    if (keyCodeToOctave(event.code) === 1 && octave < 8) {
      setOctave(octave + keyCodeToOctave(event.code))
      Synth.releasAllNotes()
    }
    if (keyCodetoKeyIndex(event.code) !== -1) {
      setIndexPlaying(oldArray => {
        const newArray = [...oldArray]
        newArray[currIndex] = true
        return newArray
      })
      if (indexPlaying[currIndex] === false) {
        handlePlayNote(currentScale[currIndex], octave)
      }
    }
  }
  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currIndex = keyCodetoKeyIndex(event.code)
    if (keyCodetoKeyIndex(event.code) !== -1) {
      setIndexPlaying(oldArray => {
        const newArray = [...oldArray]
        newArray[currIndex] = false
        return newArray
      })
      handleEndNote(currentScale[currIndex], octave)
    }
  }
  const noOctaveSwitchClassName = "transition self-center h-12 md:h-24 lg:h-32 opacity-30 text-sky-100"
  const octaveSwitchClassName =  "transition self-center h-12 md:h-24 lg:h-32 " + octaveToOpacity(octave)

  return (
    <div
      className="justify-center self-center flex flex-row h-[65vh] w-full bg-accent-purple py-8 rounded-[30px] shadow-box-inner border-4"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <SolidIcons.ChevronLeftIcon className={octave<4?octaveSwitchClassName:noOctaveSwitchClassName} />
      <Keyboard
        currentScale={currentScale}
        indexPlaying={indexPlaying}
        setIndexPlaying={setIndexPlaying}
        octave={octave}
      />
      <SolidIcons.ChevronRightIcon className={octave>4?octaveSwitchClassName:noOctaveSwitchClassName} />
    </div>

  )
}

export default KeyboardHandler
