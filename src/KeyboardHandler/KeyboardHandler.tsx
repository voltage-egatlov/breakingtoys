import React, { FC, useState } from "react"

import * as SolidIcons from "@heroicons/react/solid"

import * as Scale from "../model/scales"
import * as Note from "../model/note"
import * as Synth from "../model/synth"

import Keyboard from "./Keyboard"
import * as Tone from "tone"

const keyCodetoKeyIndex = (keyCode: string): number => {
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
    case "Comma":
      return 12
    default:
      return -1
  }
}

const handlePlayNote = (
  note: Note.Note,
  octave: number,
  synth: Tone.PolySynth,
) => {
  Synth.triggerNote(Note.getNoteShifted(note, octave), synth)
}
const handleEndNote = (
  note: Note.Note,
  octave: number,
  synth: Tone.PolySynth,
) => {
  Synth.releaseNote(Note.getNoteShifted(note, octave), synth)
}

const keyCodeToOctave = (keyCode: string): number => {
  switch (keyCode) {
    case "KeyK":
      return -1
    case "KeyL":
      return 1
    default:
      return 0
  }
}

const octaveToOpacity = (octave: number): string => {
  switch (octave) {
    case -4:
      return "opacity-100 text-sky-500"
    case -3:
      return "opacity-80 text-sky-400"
    case -2:
      return "opacity-60 text-sky-300"
    case -1:
      return "opacity-50 text-sky-200"
    case 0:
      return "opacity-30 text-sky-100"
    case 1:
      return "opacity-50 text-sky-200"
    case 2:
      return "opacity-60 text-sky-300"
    case 3:
      return "opacity-80 text-sky-400"
    case 4:
      return "opacity-100 text-sky-500"
    default:
      return "opacity-30 text-sky-100"
  }
}

type KeyboardHandlerProps = {
  synth: Tone.PolySynth
}
const KeyboardHandler: FC<KeyboardHandlerProps> = ({ synth }) => {
  const [octave, setOctave] = useState(0)
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
    false,
  ])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currIndex = keyCodetoKeyIndex(event.code)
    if (keyCodeToOctave(event.code) === -1 && octave > -4) {
      Synth.releaseAllNotes(synth)
      setOctave(octave + keyCodeToOctave(event.code))
    }
    if (keyCodeToOctave(event.code) === 1 && octave < 4) {
      setOctave(octave + keyCodeToOctave(event.code))
      Synth.releaseAllNotes(synth)
    }
    if (keyCodetoKeyIndex(event.code) !== -1) {
      setIndexPlaying(oldArray => {
        const newArray = [...oldArray]
        newArray[currIndex] = true
        return newArray
      })
      if (indexPlaying[currIndex] === false) {
        handlePlayNote(currentScale[currIndex], octave, synth)
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
      handleEndNote(currentScale[currIndex], octave, synth)
    }
  }
  const noOctaveSwitchClassName =
    "transition self-center h-12 md:h-24 lg:h-32 opacity-30 text-sky-100"
  const octaveSwitchClassName =
    "transition self-center h-12 md:h-24 lg:h-32 " + octaveToOpacity(octave)
  const [keyboardFocused, setKeyboardFocused] = useState(false)

  return (
    <div
      className="keyboard-box-style"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onFocus={() => setKeyboardFocused(true)}
    >
      <SolidIcons.ChevronLeftIcon
        className={octave < 0 ? octaveSwitchClassName : noOctaveSwitchClassName}
      />
      <Keyboard
        currentScale={currentScale}
        indexPlaying={indexPlaying}
        setIndexPlaying={setIndexPlaying}
        octave={octave}
        synth={synth}
      />
      <SolidIcons.ChevronRightIcon
        className={octave > 0 ? octaveSwitchClassName : noOctaveSwitchClassName}
      />
      {!keyboardFocused && (
        <div className="transition absolute self-center bg-black opacity-40 rounded-full shadow-box-outer">
          <p className="text-6xl text-white opacity-100 p-10">
            Click Here to Play
          </p>
        </div>
      )}
    </div>
  )
}

export default KeyboardHandler
