import * as Tone from "tone"
import { FC, useState, startTransition } from "react"

import { VolumeUpIcon } from "@heroicons/react/outline"
import { Switch } from "@headlessui/react"

import * as Note from "../model/note"
import * as Scale from "../model/scales"
import * as Synth from "../model/synth"

const Sounder: FC = () => {
  const availableNotes: Note.Note[] = Scale.getScale("A", "major")
  const [length, setLength] = useState(false)
  /*styling for switches*/
  const baseStyle = "relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-gray-400 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-0 flex-auto"
  const switchStyle = length ? `bg-purple-900 ${baseStyle}` : `bg-purple-700 ${baseStyle}`
  
  const [currentNote, setCurrentNote] = useState<Note.Note>(
    Note.first(availableNotes),
  )

  const handleSound = (): void => {
    const randomInteger = Math.floor(Math.random() * availableNotes.length)
    const randomNote: Note.Note = availableNotes[randomInteger]
    Synth.triggerNote(randomNote)
    Synth.releaseNote(determineLength(length))
    startTransition(() => {
      setCurrentNote(randomNote)
    })
  }

  const determineLength = (isLong: boolean): string => {
    if (!isLong) {
      return "0.2"
    } else {
      return "2"
    }
  }

  return (
    <div className="flex-column align-center">
      <div className="flex align-center ">
        <header className="text-purple-400 px-3 flex-auto">
          long notes -{">"}
        </header>
        <div id="length-switch flex-auto" className="p-0">
          <Switch
            checked={length}
            onChange={setLength}
            className={switchStyle}>
            <span
              aria-hidden="true"
              className={`${
                length ? "translate-x-9" : "translate-x-0"
              } pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
      <div>
        <button onClick={handleSound}>
          <VolumeUpIcon className="App-logo animate-pulse text-icon-color" />
        </button>
        <header className="text-yellow-500">
          Note: {Note.getNote(currentNote)}
        </header>
      </div>
    </div>
  )
}

export default Sounder
