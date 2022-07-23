import * as Note from "./note"

//this file is incomplete, temporarily letting this go so i can do real work
const chromaticScale: Note.Note[] = []
chromaticScale.push({
  noteLetter: "C",
  noteAccidental: "",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "C",
  noteAccidental: "#",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "D",
  noteAccidental: "",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "D",
  noteAccidental: "#",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "E",
  noteAccidental: "",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "F",
  noteAccidental: "",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "F",
  noteAccidental: "#",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "G",
  noteAccidental: "",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "G",
  noteAccidental: "#",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "A",
  noteAccidental: "",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "A",
  noteAccidental: "#",
  noteOctave: 4,
  noteLength: "Whole",
})
chromaticScale.push({
  noteLetter: "B",
  noteAccidental: "",
  noteOctave: 4,
  noteLength: "Whole",
})

export const getScale = (
  keyName: "A" | "B" | "C" | "D" | "E" | "F" | "G",
  keyType: "major" | "minor",
): Note.Note[] => {
  return chromaticScale
}
