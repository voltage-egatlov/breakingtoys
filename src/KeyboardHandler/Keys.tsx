import { FC } from "react"
import * as Note from "../model/note"
import * as Synth from "../model/synth"
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
}

const Key: FC<KeyProps> = ({
  color,
  index,
  indexPlaying,
  setIndexPlaying,
  note,
  octave,
}) => {
  const keyColorClass = keyColorToClass(color)
  const className = !indexPlaying[index]
    ? `${keyColorClass} justify-center`
    : `${keyColorClass} justify-center shadow-key-hover-small translate-x-1 translate-y-1`

  const handleOnMouseDown = () => {
    const newArray = [...indexPlaying]
    newArray[index] = true
    setIndexPlaying(newArray)
    Synth.triggerNote(Note.getNoteShifted(note, octave))
  }
  const handleOnMouseUp = () => {
    const newArray = [...indexPlaying]
    newArray[index] = false
    setIndexPlaying(newArray)
    Synth.releaseNote(Note.getNoteShifted(note, octave))
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
