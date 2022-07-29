import * as Tone from "tone"
import * as Note from "../model/note"

export const triggerNote = (note: Note.Note, synth: Tone.PolySynth): void => {
  synth.triggerAttack(Note.getNote(note), "+0")
}

export const releaseNote = (note: Note.Note, synth: Tone.PolySynth): void => {
  synth.triggerRelease(Note.getNote(note))
}

export const releaseAllNotes = (synth: Tone.PolySynth): void => {
  synth.releaseAll()
}
