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
        color: string,

    ) => {

    }
    return (
        <div className="flex flex-row justify-center h-1/2 w-3/4">
            <div className="flex flex-col justify-center basis-3/7">
                <div id="blackKeysLeft" className="key-container justify-evenly">
                    <Key color="black"></Key>
                    <Key color="black"></Key>
                </div>
                <div id="whiteKeysLeft" className="key-container justify-between min-w-full">
                    <Key color="white"></Key>
                    <Key color="white"></Key>
                    <Key color="white"></Key>
                </div>
            </div>
            <div className="flex flex-col justify-center basis-4/7">
                <div id="blackKeysRight" className="key-container justify-evenly">
                    <Key color="black"></Key>
                    <Key color="black"></Key>
                    <Key color="black"></Key>
                </div>
                <div id="whiteKeysRight" className="key-container justify-evenly">
                    <Key color="white"></Key>
                    <Key color="white"></Key>
                    <Key color="white"></Key>
                    <Key color="white"></Key>
                </div>
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