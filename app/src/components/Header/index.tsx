'use client'
import { About } from "@/components/Header/elements/about";
import React, { useState } from "react";
import { CiCircleQuestion, CiCircleRemove } from "react-icons/ci";

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
        <div className={'fixed flex justify-end max-w-4xl left-0 right-0 m-auto'}
             style={{zIndex: 100}}
        >
          {
            aboutIsViewState &&
              <CiCircleRemove className={'w-9 h-9 rounded-full bg-white shadow-lg cursor-pointer'} onClick={handleQuestion}/>
              ||
              <CiCircleQuestion className={'w-9 h-9 rounded-full bg-white shadow-lg cursor-pointer'} onClick={handleQuestion}/>
          }
        </div>
        {
          aboutIsViewState && <About onClick={handleQuestion}/>
        }
      </>
  )
}