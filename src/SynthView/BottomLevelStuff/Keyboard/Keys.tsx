import { FC } from "react"
import * as Note from "../../../model/note"
import * as Synth from "../../../model/synth"
import * as Tone from "tone"
type KeyColor = "black" | "white"

const keyColorToClass = (keyColor: KeyColor): string => {
  switch (keyColor) {
    case "black":
      return "key-bl"
    case "white":
      return "key-wh"
  }
}

type KeyProps = {
  color: KeyColor
  index: number
  indexPlaying: boolean[]
  setIndexPlaying: (idx: boolean[]) => void
  note: Note.Note
  octave: number
  synth: Tone.PolySynth
  isArpKey?: boolean
}

const Key: FC<KeyProps> = ({
  color,
  index,
  indexPlaying,
  setIndexPlaying,
  note,
  octave,
  synth,
  isArpKey,
}) => {
  const keyColorClass = keyColorToClass(color)
  const opacityModifier = isArpKey ? "opacity-50" : "opacity-100"
  const className = !indexPlaying[index]
    ? `${keyColorClass} justify-center ` + opacityModifier
    : `${keyColorClass} justify-center shadow-key-hover-small translate-x-1 translate-y-1`

  const handleOnMouseDown = () => {
    if (!isArpKey) {
      const newArray = [...indexPlaying]
      newArray[index] = true
      setIndexPlaying(newArray)
      Synth.triggerNote(Note.getNoteShifted(note, octave), synth)
    }
  }
  const handleOnMouseUp = () => {
    if (!isArpKey) {
      const newArray = [...indexPlaying]
      newArray[index] = false
      setIndexPlaying(newArray)
      Synth.releaseNote(Note.getNoteShifted(note, octave), synth)
    }
  }
  return (
    <div
      className={className}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseUp}
    >
      <p className="select-none self-end text-center mb-5 text-xs font-bold"></p>
    </div>
  )
}
export default Key
