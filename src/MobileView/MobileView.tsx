import { FC } from "react"
import { useState } from "react"

const MobileView: FC = () => {
  const [showFunText, setShowFunText] = useState(false)
  const onClickOkWithMobile = () => {
    setShowFunText(true)
  }
  return (
    <div className="self-center">
      {showFunText ? (
        <h1 className="shadow-lg rounded-full p-3 border-2">
          That did nothing, fool. Now switch to landscape.
        </h1>
      ) : (
        <div className="self-center text-size">
          <p className="shadow-inner p-2 font-bold animate-bounce w-fit">
            This app is not designed for portrait
          </p>
          <button
            className="shadow-lg rounded-lg w-fit p-2 transition hover:shadow-sm hover:translate-y-1"
            onClick={onClickOkWithMobile}
          >
            ok
          </button>
        </div>
      )}
    </div>
  )
}

export default MobileView
