import * as Tone from "tone"
import * as Note from "../model/note"

const synth = new Tone.Synth().toDestination();

export const triggerNote =(note:Note.Note):void =>{
    synth.triggerAttack(Note.getNote(note))
}

export const releaseNote =(time?:string):void =>{
    synth.triggerRelease()
}