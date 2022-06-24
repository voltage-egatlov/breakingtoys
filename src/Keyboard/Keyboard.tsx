import * as Tone from "tone"
import { FC, useState, startTransition } from "react"

import { VolumeUpIcon } from "@heroicons/react/outline"
import { Switch } from "@headlessui/react"

import * as Note from "../model/note"
import * as Scale from "../model/scales"
import * as Synth from "../model/synth"

import Key from "./Keys"

const Keyboard: FC = () => {
    const makeKey = (
        color:string,

    )=>{
        
    }
    return (
        <div className="flex flex-col content-center w-3/4">
            <div id="blackKeys" className="flex flex-row justify-around">
                <Key></Key>
                <Key></Key>
                <Key></Key>
                <Key></Key>
                <Key></Key>
            </div>
            <div id="blackKeys" className="flex flex-row justify-around">
                <Key></Key>
                <Key></Key>
                <Key></Key>
                <Key></Key>
                <Key></Key>
                <Key></Key>
                <Key></Key>
            </div>
        </div>
    )
}
export default Keyboard

/*This file will contain:
- The arrows to switch octaves
- The 12 keys
- the scale selector
- the scale binder
- the various knobs
*/