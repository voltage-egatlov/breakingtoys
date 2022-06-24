import { FC, useState, startTransition } from "react"

type KeyColor="black"|"white"

const keyColorToClass=(keyColor:KeyColor): string=>{
    switch(keyColor){
        case "black":
            return "key-bl"
        case "white":
            return "key-wh"
    }
}

type KeyProps = {
    color: KeyColor
  }
const Key: FC<KeyProps> = ({
    color,
}) => {
    const keyColorClass=keyColorToClass(color)
    const className=`${keyColorClass} flex justify-center justify-end `
    return (
        <div className={className}>
            <p className="select-none self-end mb-5 ">
                Note
            </p>
        </div>
    )
}
export default Key