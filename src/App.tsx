import { getRatio } from "./sizeHandler"
import { useState } from "react"
import SynthView from "./SynthView"
import MobileView from "./MobileView"

function App() {
  const isMobile = getRatio() < 1
  const [isUserOkWithMobile, setIsUserOkWithMobile] = useState(isMobile)

  window.addEventListener("resize", function () {
    const ratio = getRatio()
    if (ratio > 1) {
      setIsUserOkWithMobile(false)
    } else if (ratio <= 1) {
      setIsUserOkWithMobile(true)
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        {isUserOkWithMobile ? <MobileView /> : <SynthView />}
      </header>
    </div>
  )
}

export default App
