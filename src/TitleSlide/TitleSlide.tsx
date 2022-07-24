import { FC } from "react"

type TitleSlideProps = {
}

const TitleSlide: FC<TitleSlideProps> = () => {


  return (
    <div className="self-end bg-accent-pink mb-5 rounded-[30px] px-4 pt-4 border-4 flex flex-row justify-between shadow-box-outer min-w-fit w-3/4">
        <h1 className="font-mono text-7xl tracking-[-0.08em] text-text-yellow ">The Synth</h1>
        <p className="self-end font-mono text-sm tracking-tighter mb-4 text-text-yellow ">by Tej Chhabra</p>
    </div>
  )
}

export default TitleSlide