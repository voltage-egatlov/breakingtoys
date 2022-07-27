import { FC } from "react"

import Key from "./Keys"

import * as Note from "../model/note"

type KeyboardProps = {
  currentScale: Note.Note[]
  indexPlaying: boolean[]
  setIndexPlaying: (idx: boolean[]) => void
  octave: number
}
const Keyboard: FC<KeyboardProps> = ({
  currentScale,
  indexPlaying,
  setIndexPlaying,
  octave,
}) => {
  return (
    <div className="self-center flex flex-col h-full w-full">
      <div className="key-container w-7/8 h-1/2">
        <Key
          color="black"
          index={1}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[1]}
          octave={octave}
        ></Key>
        <Key
          color="black"
          index={3}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[3]}
          octave={octave}
        ></Key>
        <div className="key-empty" />
        <Key
          color="black"
          index={6}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[6]}
          octave={octave}
        ></Key>
        <Key
          color="black"
          index={8}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[8]}
          octave={octave}
        ></Key>
        <Key
          color="black"
          index={10}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[10]}
          octave={octave}
        ></Key>
      </div>
      <div className="key-container w-full h-1/2">
        <Key
          color="white"
          index={0}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[0]}
          octave={octave}
        ></Key>
        <Key
          color="white"
          index={2}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[2]}
          octave={octave}
        ></Key>
        <Key
          color="white"
          index={4}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[4]}
          octave={octave}
        ></Key>
        <Key
          color="white"
          index={5}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[5]}
          octave={octave}
        ></Key>
        <Key
          color="white"
          index={7}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[7]}
          octave={octave}
        ></Key>
        <Key
          color="white"
          index={9}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[9]}
          octave={octave}
        ></Key>
        <Key
          color="white"
          index={11}
          indexPlaying={indexPlaying}
          setIndexPlaying={setIndexPlaying}
          note={currentScale[11]}
          octave={octave}
        ></Key>
      </div>
    </div>
  )
}
export default Keyboard
