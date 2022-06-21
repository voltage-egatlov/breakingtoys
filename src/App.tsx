import React, { useState } from "react"

import "./App.css"
import Sounder from "./Sounder"
import IntroScreen from "./IntroScreen"

function App() {
  const [makingMusic, setMakingMusic] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {makingMusic ? (
          <Sounder />
        ) : (
          <IntroScreen setMakingMusic={setMakingMusic} />
        )}
      </header>
    </div>
  )
}

export default App
