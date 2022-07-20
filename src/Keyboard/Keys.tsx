import { FC } from "react"
import * as Note from "../model/note"
import * as Synth from "../model/synth"

type KeyColor = "black" | "white" | "empty"

const keyColorToClass = (keyColor: KeyColor): string => {
    switch (keyColor) {
        case "black":
            return "key-bl"
        case "white":
            return "key-wh"
        case "empty":
            return "key-empty"
    }
}

// const buildNoteLabel = (note?: Note.Note): string => {
//     if (note) {
//         return Note.getNote(note)
//     }
//     else {
//         return ""
//     }
// }

type KeyProps = {
    color: KeyColor
    note?: Note.Note
}
const Key: FC<KeyProps> = ({
    color,
    note,
}) => {
    const keyColorClass = keyColorToClass(color)
    const className = `${keyColorClass} justify-center`
    //const noteLabel = buildNoteLabel(note)

    const handleOnMouseDown = () => {
        if (note) { Synth.triggerNote(note) }
    }
    const handleOnMouseUp = () => {
        Synth.releaseNote()
    }
    return (
        note ? (
            <button className={className} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
                <p className="select-none self-end text-center mb-5 text-xs font-bold">
                </p>
            </button>
        ) :
            <div className={`${className}`}></div>
    )

}
export default Key