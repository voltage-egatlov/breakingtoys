export type Note = {
  noteLetter: "A" | "B" | "C" | "D" | "E" | "F" | "G"
  noteAccidental: "b" | "" | "#"
  noteOctave: "1" | "2" | "3" | "4" | "5"
  noteLength: "Whole" | "Half" | "Quarter" | "Eighth"
}

export const get = (thisNote: Note): string => {
  return thisNote.noteLetter + thisNote.noteAccidental + thisNote.noteOctave
}

export const first = (noteArr: Note[]): Note => {
  return noteArr[0]
}
