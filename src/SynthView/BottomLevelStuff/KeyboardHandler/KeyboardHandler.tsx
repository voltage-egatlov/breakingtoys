import React, { FC, useState } from "react"

import * as Note from "../../../model/note"
import * as Synth from "../../../model/synth"
import * as Scale from "../../../model/scales"

import Keyboard from "../Keyboard/Keyboard"
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

type KeyboardHandlerProps = {
  synth: Tone.PolySynth
  octave: number
  setOctave: (octave: number) => void
}
const KeyboardHandler: FC<KeyboardHandlerProps> = ({
  synth,
  octave,
  setOctave,
}) => {
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
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <Keyboard
        currentScale={currentScale}
        indexPlaying={indexPlaying}
        setIndexPlaying={setIndexPlaying}
        octave={octave}
        setOctave={setOctave}
        synth={synth}
      />
    </div>
  )
}

export default KeyboardHandler
