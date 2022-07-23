export type Note = {
  noteLetter: "A" | "B" | "C" | "D" | "E" | "F" | "G"
  noteAccidental: "b" | "" | "#"
  noteOctave: number
  noteLength: "Whole" | "Half" | "Quarter" | "Eighth"
} | null

export const getNote = (thisNote: Note): string => {
  if (thisNote !== null) {
    return thisNote.noteLetter + thisNote.noteAccidental + thisNote.noteOctave
  } else {
    return "Empty"
  }
}

export const getNoteShifted = (thisNote: Note, octaves: number): Note => {
  if (thisNote !== null) {
    return {
      noteLetter: thisNote.noteLetter,
      noteAccidental: thisNote.noteAccidental,
      noteOctave: thisNote.noteOctave + octaves,
      noteLength: thisNote.noteLength,
    }
  } else {
    return null
  }
}

export const first = (noteArr: Note[]): Note => {
  return noteArr[0]
}
