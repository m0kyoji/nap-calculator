"use client"

import { ENERGY_BORDER } from "@/constant/energy";
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { calcRedundantSleepinessPower, convertSleepinessPowerToTime, convertToHoursAndMinutes } from "@/functions/sleepTime";
import { useCalcEncounterNumb } from "@/hooks/useCalcEncounterNumb";
import { useCalcNemukePower } from "@/hooks/useCalcNemukePower";
import { useCalcSleepScore } from "@/hooks/useCalcSleepScore";
import { useDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import { inputEnergyAtom, inputSleepTimeAtom, napLengthAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from 'jotai'
import React, { useMemo } from 'react'
import { BsMoonStars, BsSun } from "react-icons/bs";

export const Result = () => {

  const [sleepTimeState] = useAtom(inputSleepTimeAtom);
  const [energyState] = useAtom(inputEnergyAtom);
  const [islandState] = useAtom(selectedIslandAtom);
  const [napLengthState] = useAtom(napLengthAtom);

  const calcNightSleepTime:number = useMemo(() => MAX_SLEEP_TIME - sleepTimeState, [sleepTimeState])

  const requireSleepTime = (islandId: number, borderKey: number) => {
    const island = ISLANDS.find((island) => island.id == islandId) || ISLANDS[0]
    const borderValues: {[key: string]: number} = ENERGY_BORDER[island.name];
    return Math.round((borderValues[borderKey] / energyState) * MAX_SLEEP_TIME / 100) || 0;
  }

  const bestNapLength:{hours: number, minutes: number} = useMemo(() => {
    const redundantPower:number = calcRedundantSleepinessPower(napLengthState[0].daytime.value, napLengthState[0].nighttime.value, energyState)
    return convertToHoursAndMinutes(convertSleepinessPowerToTime(napLengthState[0].daytime.value + (redundantPower/2), energyState));
  }, [napLengthState])

  return (
      <>
        <div className={'mt-8 flex flex-col justify-center items-center'}>
          <div className={'text-md font-light'}>おすすめする、おひる寝の長さ</div>
          <div id={'recommendedTime'} className={'mt-1 flex justify-center items-end gap-1 relative px-3'}>
            <span className={'text-4xl tracking-wide'}>{bestNapLength.hours || 0}</span>
            <span className={'text-2xl tracking-wide'}>時間</span>
            <span className={'text-4xl tracking-wide'}>{bestNapLength.minutes || 0}</span>
            <span className={'text-2xl tracking-wide'}>分</span>
          </div>

          <div className={'text-md font-light mt-11'}>
            <p className={'text-center'}>出会えるかもしれない</p>
            <p className={'text-center'}>ポケモンの数</p>
          </div>

          <div className={'flex flex-col sm:flex-row justify-center items-top mt-4 gap-4'}>
            <div className={'px-3 w-50'}>
              <div className={'flex justify-center text-4xl'}>
                <BsSun/>
              </div>
              <div className={'mt-6 text-center'}>
                <span className={'text-4xl font-light'}>{useCalcEncounterNumb(islandState, sleepTimeState, energyState)}</span>
                <span className={'text-1xl font-medium'}>匹</span>
              </div>
              <div className={'flex flex-col gap-2 mt-4'}>
                <div className={'px-2 flex justify-between'}>
                  <div style={{minWidth: '7em'}}>
                    <span>睡眠スコア</span>
                  </div>
                  <div className={'text-right'} style={{minWidth: '7em'}}>
                    <span>{Math.round(useCalcSleepScore(sleepTimeState))}</span>
                  </div>
                </div>
                <div className={'px-2 flex justify-between'}>
                  <div style={{minWidth: '7em'}}>
                    <span>ねむけパワー</span>
                  </div>
                  <div className={'text-right'} style={{minWidth: '7em'}}>
                    <span>{Math.round(useCalcNemukePower(sleepTimeState, energyState)).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={'my-3'} style={{width: '1px', backgroundColor: '#545454'}}></div>
            <div className={'px-3 w-50'}>
              <div className={'flex justify-center text-4xl'}>
                <BsMoonStars/>
              </div>
              <div className={'mt-6 text-center'}>
                <span className={'text-4xl font-light'}>{useCalcEncounterNumb(islandState, calcNightSleepTime, energyState)}</span>
                <span className={'text-1xl font-medium'}>匹</span>
              </div>
              <div className={'flex flex-col gap-2 mt-4'}>
                <div className={'px-2 flex justify-between'}>
                  <div style={{minWidth: '7em'}}>
                    <span>睡眠スコア</span>
                  </div>
                  <div className={'text-right'} style={{minWidth: '7em'}}>
                    <span>{Math.round(useCalcSleepScore(calcNightSleepTime))}</span>
                  </div>
                </div>
                <div className={'px-2 flex justify-between'}>
                  <div style={{minWidth: '7em'}}>
                    <span>ねむけパワー</span>
                  </div>
                  <div className={'text-right'} style={{minWidth: '7em'}}>
                    <span>{Math.round(useCalcNemukePower(calcNightSleepTime, energyState)).toLocaleString()}</span>
                  </div>
                </div>
                <div>
                  <p className={'mt-1 font-light text-xs text-center block'}>
                    {`最低で約 ${useDisplaySleepTime(requireSleepTime(islandState, useCalcEncounterNumb(islandState, calcNightSleepTime, energyState))).hours}時間${useDisplaySleepTime(requireSleepTime(islandState, useCalcEncounterNumb(islandState, calcNightSleepTime, energyState))).minutes}分 寝る必要があります`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}