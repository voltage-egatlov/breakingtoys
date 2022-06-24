import * as Tone from "tone"
import { FC, useState, startTransition } from "react"

import { VolumeUpIcon } from "@heroicons/react/outline"
import { Switch } from "@headlessui/react"

import * as Note from "../model/note"
import * as Scale from "../model/scales"

const synth = new Tone.Synth().toDestination();

export const triggerNote =(note:Note.Note):void =>{
    synth.triggerAttack(Note.getNote(note))
}

export const stopNote =(time?:string):void =>{
    synth.triggerRelease("+"+time)
}