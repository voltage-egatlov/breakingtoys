import { useState } from "react"

import Keyboard from "./Keyboard"
import IntroScreen from "./IntroScreen"

function App() {
  const [makingMusic, setMakingMusic] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {makingMusic ? (
          <Keyboard />
        ) : (
          <IntroScreen setMakingMusic={setMakingMusic} />
        )}
      </header>
    </div>
  )
}

export default App
