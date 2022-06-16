import * as Tone from 'tone'
import speaker from '../img/speaker.png'
import React, {
    ChangeEventHandler,
    FC,
    useEffect,
    useMemo,
    useState,
} from "react"

import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline'
import { Switch } from '@headlessui/react'

import { wait } from '@testing-library/user-event/dist/utils'

const Sounder: FC = () => {
    const synth = new Tone.Synth().toDestination();
    const availableNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"]
    const [long, setLength] = useState(false)
    const [currentNote, setNote]=useState("C4")

    const handleSound = (): void => {
        handleNote()
        synth.triggerAttackRelease(currentNote, handleLength(long))
    }

    const handleLength = (longness: boolean): string => {
        if (!longness) {
            return "50n"
        }
        else {
            return "8n"
        }
    }

    const handleNote =() : void =>{
        const random = Math.floor(Math.random() * availableNotes.length);
        setNote(availableNotes[random])
    }

    return (
        <div className='flex-column align-center'>
            <div className='flex align-center '>
                <header className='text-purple-400 px-3 flex-auto'>long notes -{'>'}</header>
                <div id='length-switch flex-auto' className='p-0'>
                    <Switch
                        checked={long}
                        onChange={setLength}
                        className={`${long ? 'bg-purple-900' : 'bg-purple-700'} relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-gray-400 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-0 flex-auto`}
                    >
                        <span
                            aria-hidden="true"
                            className={`${long ? 'translate-x-9' : 'translate-x-0'} pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                </div>
            </div>
            <div>
                <button onClick={handleSound}>
                    <VolumeUpIcon className="App-logo animate-pulse text-icon-color" />
                </button>
                <header className="text-yellow-500">Note: {currentNote}</header>
            </div>
        </div>
    )
}

export default Sounder