import { FC } from "react"
import * as Scale from "../model/scales"
import Key from "./Keys"

import { Knob } from "../UI"

const Keyboard: FC = () => {
    const currentScale = Scale.getScale("A", "major")
    return (
        <div className="justify-center self-center flex flex-col h-screen w-screen">
            <div className="self-center select-none"> 
                <Knob selectableOptions={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]} height={20}/>
            </div>
            <div className="self-center flex flex-col w-3/4 h-[75vh] gap-2 md:w-7/12 lg:w-2/4 lg:h-[50vh]">
                <div id="blackKeysLeft" className="key-container w-7/8 h-1/2">
                    <Key color="black" note={currentScale[1]}></Key>
                    <Key color="black" note={currentScale[3]}></Key>
                    <Key color="empty"></Key>
                    <Key color="black" note={currentScale[6]}></Key>
                    <Key color="black" note={currentScale[8]}></Key>
                    <Key color="black" note={currentScale[10]}></Key>
                </div>
                <div id="whiteKeysLeft" className="key-container w-full h-1/2">
                    <Key color="white" note={currentScale[0]}></Key>
                    <Key color="white" note={currentScale[2]}></Key>
                    <Key color="white" note={currentScale[4]}></Key>
                    <Key color="white" note={currentScale[5]}></Key>
                    <Key color="white" note={currentScale[7]}></Key>
                    <Key color="white" note={currentScale[9]}></Key>
                    <Key color="white" note={currentScale[11]}></Key>
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