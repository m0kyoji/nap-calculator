"use client"

import { useCalcEncounterNumb } from "@/hooks/useCalcEncounterNumb";
import { UseCalcNemukePower } from "@/hooks/useCalcNemukePower";
import { UseCalcSleepScore } from "@/hooks/useCalcSleepScore";
import { UseDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import React from 'react'

export const Result = () => {


  return (
      <>
        <div className={'flex flex-col justify-center items-center'}>
          <div>
            <span>時間: </span>
            <span>{`${UseDisplaySleepTime().hours}時間${UseDisplaySleepTime().minutes}分`}</span>
          </div>
          <div>
            <span>予想睡眠スコア: </span>
            <span>{UseCalcSleepScore()}</span>
          </div>
          <div>
            <span>予想ねむけパワー: </span>
            <span>{UseCalcNemukePower().toLocaleString()}</span>
          </div>
          <div>
            <span>予想ポケモン数: </span>
            <span>{useCalcEncounterNumb()}匹</span>
          </div>
        </div>
      </>
  )
}