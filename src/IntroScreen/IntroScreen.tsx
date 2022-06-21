import { FC } from "react"

import { MusicNoteIcon } from "@heroicons/react/outline"

type IntroScreenProps = {
  setMakingMusic: (makingMusic: boolean) => void
}

const IntroScreen: FC<IntroScreenProps> = ({ setMakingMusic }) => {
  const handleOnClickStart = (): void => {
    setMakingMusic(true)
  }

  return (
    <div>
      <button onClick={handleOnClickStart}>
        <MusicNoteIcon className="App-logo animate-spin-stopping text-sky-800" />
      </button>
      <h1 className="text-yellow-500">No Sound Is Being Generated</h1>
    </div>
  )
}
export default IntroScreen
