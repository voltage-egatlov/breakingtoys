import { FC } from "react"

type TitleSlideProps = {
  isOtherTabVisible: boolean
}

const TitleSlide: FC<TitleSlideProps> = ({ isOtherTabVisible }) => {
  return (
    <div className="top-tab-style h-full">
      <h1 className="self-center font-mono text-xl md:text-3xl lg:text-5xl tracking-[-0.08em] text-text-yellow ">
        The Synth
      </h1>
      {!isOtherTabVisible && (
        <p className="self-start font-mono text-[0.5rem] md:text-sm lg:text-base tracking-tighter mb-4 text-text-yellow ">
          by Tej Chhabra
        </p>
      )}
    </div>
  )
}

export default TitleSlide
