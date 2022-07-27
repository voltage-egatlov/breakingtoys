import * as Tone from "tone"
import * as Note from "../model/note"

const synth = new Tone.PolySynth(Tone.Synth).toDestination()

export const triggerNote = (note: Note.Note): void => {
  synth.triggerAttack(Note.getNote(note), "+0")
}

export const releaseNote = (note: Note.Note): void => {
  synth.triggerRelease(Note.getNote(note))
}

export const releasAllNotes = (): void => {
  synth.releaseAll()
}