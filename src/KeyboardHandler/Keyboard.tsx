import { FC } from "react"

import Key from "./Keys"

import * as Note from "../model/note"

type KeyboardProps = {
  currentScale: Note.Note[]
  indexPlaying: boolean[]
  setIndexPlaying: (idx: boolean[]) => void
  octaveShift: number
}
const Keyboard: FC<KeyboardProps> = ({
  currentScale,
  indexPlaying,
  setIndexPlaying,
  octaveShift,
}) => {
  return (
    <div className="self-center flex flex-col w-3/4 h-[75vh] gap-2 md:w-7/12 lg:w-2/4 lg:h-[50vh]">
      <div id="blackKeysLeft" className="key-container w-7/8 h-1/2">
        <Key
          color="black"
          index={1}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[1]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="black"
          index={3}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[3]}
          octaveShift={octaveShift}
        ></Key>
        <div className="key-empty" />
        <Key
          color="black"
          index={6}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[6]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="black"
          index={8}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[8]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="black"
          index={10}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[10]}
          octaveShift={octaveShift}
        ></Key>
      </div>
      <div id="whiteKeysLeft" className="key-container w-full h-1/2">
        <Key
          color="white"
          index={0}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[0]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="white"
          index={2}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[2]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="white"
          index={4}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[4]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="white"
          index={5}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[5]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="white"
          index={7}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[7]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="white"
          index={9}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[9]}
          octaveShift={octaveShift}
        ></Key>
        <Key
          color="white"
          index={11}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[11]}
          octaveShift={octaveShift}
        ></Key>
      </div>
    </div>
  )
}
export default Keyboard
