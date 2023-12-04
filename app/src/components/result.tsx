"use client"

import { ENERGY_BORDER } from "@/constant/energy";
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { useCalcEncounterNumb } from "@/hooks/useCalcEncounterNumb";
import { UseCalcNemukePower } from "@/hooks/useCalcNemukePower";
import { UseCalcSleepScore } from "@/hooks/useCalcSleepScore";
import { UseDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import { inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from 'jotai'
import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";


export const Result = () => {

  const [sleepTimeState] = useAtom(inputSleepTimeAtom);
  const [energyState] = useAtom(inputEnergyAtom);
  const [islandState] = useAtom(selectedIslandAtom);

  const calcNightSleepTime = (dayTime: number) => {
    return MAX_SLEEP_TIME - dayTime;
  }

  const requireSleepTime = (islandId: number, borderKey: number) => {
    const island = ISLANDS.find((island) => island.id == islandId) || ISLANDS[0]
    const borderValues: {[key: string]: number} = ENERGY_BORDER[island.name];
    return Math.round((borderValues[borderKey] / energyState) * 510 / 100) || 0;
  }

  return (
      <>
        <div className={'flex flex-col justify-center items-center'}>
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="mb-2 tracking-tight text-gray-900 dark:text-white text-center">
              出会うかもしれないポケモンの数
            </p>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <div className="rounded-2xl bg-gray-50 pt-3 pb-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className={'flex justify-center'}>
                  <p className={'pb-2 mr-1 flex justify-center items-center'}>
                    <BsSun/>
                    <span className={'ml-2 text-lg'}>おひる寝</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span>睡眠スコア: </span>
                    <span>{UseCalcSleepScore(sleepTimeState)}</span>
                  </p>
                  <p>
                    <span>ねむけパワー: </span>
                    <span>{UseCalcNemukePower(sleepTimeState, energyState).toLocaleString()}</span>
                  </p>
                  <p>
                    <span>ポケモン数: </span>
                    <span>{useCalcEncounterNumb(islandState, sleepTimeState, energyState)}匹</span>
                  </p>
                </div>
              </div>
              <div className="mt-1 rounded-2xl bg-gray-50 pt-3 pb-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className={'flex justify-center'}>
                  <div className={'pb-2 mr-1 flex justify-center items-center'}>
                    <BsFillMoonStarsFill/>
                    <span className={'ml-2 text-lg'}>よる寝</span>
                  </div>
                </div>
                <div>
                  <p>
                    <span>睡眠スコア: </span>
                    <span>{UseCalcSleepScore(calcNightSleepTime(sleepTimeState))}</span>
                  </p>
                  <p>
                    <span>ねむけパワー: </span>
                    <span>{UseCalcNemukePower(calcNightSleepTime(sleepTimeState), energyState).toLocaleString()}</span>
                  </p>
                  <p>
                    <span>ポケモン数: </span>
                    <span>{useCalcEncounterNumb(islandState, calcNightSleepTime(sleepTimeState), energyState)}匹</span>
                  </p>
                  <p className={'font-medium text-xs text-neutral-500 block'}>{`最低で約 ${UseDisplaySleepTime(requireSleepTime(islandState, useCalcEncounterNumb(islandState, calcNightSleepTime(sleepTimeState), energyState))).hours}時間${UseDisplaySleepTime(requireSleepTime(islandState, useCalcEncounterNumb(islandState, calcNightSleepTime(sleepTimeState), energyState))).minutes}分 寝る必要があります`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}