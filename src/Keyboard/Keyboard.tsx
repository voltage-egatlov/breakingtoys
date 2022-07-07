import { FC } from "react"
import * as Scale from "../model/scales"
import Key from "./Keys"

const Keyboard: FC = () => {
    const currentScale=Scale.getScale("A", "major")
    return (
        <div className="flex flex-col justify-center w-3/4">
            <div id="blackKeysLeft" className="key-container w-7/8">
                <Key color="black" note={currentScale[1]}></Key>
                <Key color="black" note={currentScale[3]}></Key>
                <div className="key-empty"></div>
                <Key color="black" note={currentScale[6]}></Key>
                <Key color="black" note={currentScale[8]}></Key>
                <Key color="black" note={currentScale[10]}></Key>
            </div>
            <div id="whiteKeysLeft" className="key-container w-full">
                <Key color="white" note={currentScale[0]}></Key>
                <Key color="white" note={currentScale[2]}></Key>
                <Key color="white" note={currentScale[4]}></Key>
                <Key color="white" note={currentScale[5]}></Key>
                <Key color="white" note={currentScale[7]}></Key>
                <Key color="white" note={currentScale[9]}></Key>
                <Key color="white" note={currentScale[11]}></Key>
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