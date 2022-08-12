import * as Tone from "tone"
import * as Note from "../model/note"

const pattern = new Tone.Pattern(function (time, note) {})

export const arpeggio = (
  notes: Note.Note[],
  synth: Tone.PolySynth,
  arpOctaves: number,
  arpDirection: string,
) => {
  const notesToPlay = notes.map(note => Note.getNote(note))
  for (let i = 1; i < arpOctaves + 1; i++) {
    const notesToPlayOctave = notes.map(note => Note.getNoteShifted(note, i))
    const notesOctaveString = notesToPlayOctave.map(notesToPlayOctave =>
      Note.getNote(notesToPlayOctave),
    )
    notesToPlay.push(...notesOctaveString)
  }
  pattern.set(
    new Tone.Pattern(
      function (time, note) {
        synth.triggerAttackRelease(note, "4n")
      },
      notesToPlay,
      setDirection(arpDirection),
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

export const setPlaybackRate = (rate: number) => {
  pattern.playbackRate = (rate / 10) * 4
}

const setDirection = (direction: string) => {
  switch (direction) {
    case "up":
      return "up"
    case "down":
      return "down"
    case "upDown":
      return "upDown"
    case "random":
      return "random"
    default:
      return "up"
  }
}
