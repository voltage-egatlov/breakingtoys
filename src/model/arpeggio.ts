import * as Tone from "tone"
import * as Note from "../model/note"

const pattern = new Tone.Pattern(function (time, note) {})

export const arpeggio = (notes: Note.Note[], synth: Tone.PolySynth) => {
  const notesToPlay = notes.map(note => Note.getNote(note))
  pattern.set(
    new Tone.Pattern(
      function (time, note) {
        synth.triggerAttackRelease(note, "8n", time)
      },
      notesToPlay,
      "upDown",
    ),
  )
  Tone.Transport.start()
  pattern.start(0)
}

export const stopArpeggio = () => {
  pattern.stop()
  pattern.set(new Tone.Pattern(function (time, note) {}, []))
  Tone.Transport.stop()
}
