import React, { FC, useState } from "react"

import * as Scale from "../../../model/scales"
import * as Arpeggio from "../../../model/arpeggio"

import Keyboard from "../Keyboard/Keyboard"
import * as Tone from "tone"
import { Note } from "../../../model/note"

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

type ArpeggioHandlerProps = {
  synth: Tone.PolySynth
  octave: number
  setOctave: (octave: number) => void
}
const ArpeggioHandler: FC<ArpeggioHandlerProps> = ({
  synth,
  octave,
  setOctave,
}) => {
  const currentScale = Scale.getScale("A", "major")

  const [notesPlaying, setNotesPlaying] = useState<Note[]>([])
  const [isArpeggiatorOn, setIsArpeggiatorOn] = useState(false)
  const [isSetNotesOn, setIsSetNotesOn] = useState(false)

  const blankIndexPlaying = [
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
  ]
  const [indexPlaying, setIndexPlaying] = useState(blankIndexPlaying)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keyIndex = keyCodetoKeyIndex(event.code)
    if (event.code === "Space") {
      setIsSetNotesOn(true)
    }
    if (keyIndex !== -1 && !indexPlaying[keyIndex] && isSetNotesOn) {
      setIndexPlaying(indexPlaying => {
        const newIndexPlaying = [...indexPlaying]
        newIndexPlaying[keyIndex] = true
        return newIndexPlaying
      })

      notesPlaying.push(currentScale[keyIndex])
    }
  }
  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keyIndex = keyCodetoKeyIndex(event.code)
    if (event.code === "Space") {
      setIsSetNotesOn(false)
      if (isArpeggiatorOn) {
        setIsArpeggiatorOn(false)
        setIndexPlaying(blankIndexPlaying)
        setNotesPlaying([])
        Arpeggio.stopArpeggio()
      } else if (!isArpeggiatorOn && notesPlaying.length !== 0) {
        setIsArpeggiatorOn(true)
        Arpeggio.arpeggio(notesPlaying, synth)
      }
    }

    if (keyIndex !== -1 && indexPlaying[keyIndex] && isSetNotesOn) {
      setIndexPlaying(indexPlaying => {
        const newIndexPlaying = [...indexPlaying]
        newIndexPlaying[keyIndex] = false
        return newIndexPlaying
      })

      setNotesPlaying(
        notesPlaying.filter(function (value) {
          return value !== currentScale[keyIndex]
        }),
      )
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
        isArpKeyboard
      />
    </div>
  )
}

export default ArpeggioHandler
