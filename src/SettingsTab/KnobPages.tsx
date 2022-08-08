import React, { FC, useState } from "react"
import * as SolidIcons from "@heroicons/react/solid"

type KnobPagesProps = {
  children: React.ReactNode
  pageLabel: string
  pageNumber: number
  setPageNumber: (pageNumber: number) => void
  index: number
  lastPage?: boolean
  firstPage?: boolean
}

const KnobPages: FC<KnobPagesProps> = ({
  children,
  pageLabel,
  pageNumber,
  setPageNumber,
  index,
  lastPage,
  firstPage,
}) => {
  const isActive = pageNumber === index
  const [isLeftChevronPressed, setIsLeftChevronPressed] = useState(false)
  const [isRightChevronPressed, setisRightChevronPressed] = useState(false)

  const handleClickNextPage = () => {
    if (!lastPage) {
      setPageNumber(pageNumber + 1)
    }
  }
  const handleClickPreviousPage = () => {
    if (!firstPage) {
      setPageNumber(pageNumber - 1)
    }
  }

  const chevronClassName =
    "h-5 my-2 rounded-full border transition duration-100 shadow-chevron"
  const chevronClassNamePressed =
    "shadow-chevron-pressed translate-x-[1px] translate-y-[1px]"
  return (
    <div>
      {isActive && (
        <div className="self-start flex flex-row space-x-4">
          {children}

          <div className="flex flex-col items-center w-20">
            <SolidIcons.ChevronUpIcon
              className={`${chevronClassName} ${
                isLeftChevronPressed ? chevronClassNamePressed : ""
              }`}
              onClick={handleClickPreviousPage}
              onMouseDown={() => setIsLeftChevronPressed(true)}
              onMouseUp={() => setIsLeftChevronPressed(false)}
            />
            <h1 className="bg-back-white self-center p-1 rounded-lg text-sm text-accent-purple font-medium shadow-button border-2">
              {pageLabel}
            </h1>
            <div className="flex flex-row space-x-2">
              <SolidIcons.ChevronDownIcon
                className={`${chevronClassName} ${
                  isRightChevronPressed ? chevronClassNamePressed : ""
                }`}
                onClick={handleClickNextPage}
                onMouseDown={() => setisRightChevronPressed(true)}
                onMouseUp={() => setisRightChevronPressed(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default KnobPages
