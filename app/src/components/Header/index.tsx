'use client'
import { About } from "@/components/Header/elements/about";
import { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export const Header = () => {
  const [aboutIsViewState, setAboutIsViewState] = useState<boolean>(false)

  const handleQuestion = () => {
    setAboutIsViewState(!aboutIsViewState);
  }

  return (
      // <div className={'grid min-h-full place-items-center py-12 sm:py-16'}>
      //   <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">おひるね計算機</h1>
      // </div>
      <>
        {/*<BsFillQuestionCircleFill onClick={handleQuestion}/>*/}
        {/*{*/}
        {/*  aboutIsViewState && <About onClick={handleQuestion}/>*/}
        {/*}*/}
      </>
  )
}