import { FC } from "react"

import Key from "./Keys"
import * as SolidIcons from "@heroicons/react/solid"

import * as Note from "../../../model/note"
import * as Tone from "tone"

const octaveToOpacity = (octave: number): string => {
  switch (octave) {
    case -4:
      return "opacity-100 text-sky-500"
    case -3:
      return "opacity-80 text-sky-400"
    case -2:
      return "opacity-60 text-sky-300"
    case -1:
      return "opacity-50 text-sky-200"
    case 0:
      return "opacity-30 text-sky-100"
    case 1:
      return "opacity-50 text-sky-200"
    case 2:
      return "opacity-60 text-sky-300"
    case 3:
      return "opacity-80 text-sky-400"
    case 4:
      return "opacity-100 text-sky-500"
    default:
      return "opacity-30 text-sky-100"
  }
}

type KeyboardProps = {
  currentScale: Note.Note[]
  indexPlaying: boolean[]
  setIndexPlaying: (idx: boolean[]) => void
  octave: number
  setOctave: (octave: number) => void
  synth: Tone.PolySynth
  isArpKeyboard?: boolean
}
const Keyboard: FC<KeyboardProps> = ({
  currentScale,
  indexPlaying,
  setIndexPlaying,
  octave,
  setOctave,
  synth,
  isArpKeyboard,
}) => {
  const noOctaveSwitchClassName =
    "transition self-center h-12 md:h-24 lg:h-32 opacity-30 text-sky-100"
  const octaveSwitchClassName =
    "transition self-center h-12 md:h-24 lg:h-32 " + octaveToOpacity(octave)

  const onClickRaiseOctave = () => {
    if (octave < 4) {
      setOctave(octave + 1)
    }
  }
  const onClickLowerOctave = () => {
    if (octave > -4) {
      setOctave(octave - 1)
    }
  }

  return (
    <div className="keyboard-box-style">
      <SolidIcons.ChevronLeftIcon
        className={octave < 0 ? octaveSwitchClassName : noOctaveSwitchClassName}
        id="octave-switch-left"
        onClick={onClickLowerOctave}
      />
      <div className="self-center flex flex-col h-full w-full">
        <div className="key-container w-8/9 h-1/2">
          <Key
            color="black"
            index={1}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[1]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="black"
            index={3}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[3]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <div className="key-empty" />
          <Key
            color="black"
            index={6}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[6]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="black"
            index={8}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[8]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="black"
            index={10}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[10]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <div className="key-empty" />
        </div>
        <div className="key-container w-full h-1/2">
          <Key
            color="white"
            index={0}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[0]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="white"
            index={2}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[2]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="white"
            index={4}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[4]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="white"
            index={5}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[5]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="white"
            index={7}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[7]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="white"
            index={9}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[9]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="white"
            index={11}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[11]}
            octave={octave}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
          <Key
            color="white"
            index={12}
            indexPlaying={indexPlaying}
            setIndexPlaying={setIndexPlaying}
            note={currentScale[0]}
            octave={octave + 1}
            synth={synth}
            isArpKey={isArpKeyboard}
          ></Key>
        </div>
      </div>
      <SolidIcons.ChevronRightIcon
        className={octave > 0 ? octaveSwitchClassName : noOctaveSwitchClassName}
        id="octave-switch-right"
        onClick={onClickRaiseOctave}
      />
    </div>
  )
}
export default Keyboard
