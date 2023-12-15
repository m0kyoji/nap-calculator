"use client"
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { bestNapLength } from "@/functions/napLength";
import { calcRedundantSleepinessPower, convertSleepinessPowerToTime, convertToHoursAndMinutes } from "@/functions/sleepTime";
import { UseDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import { inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export const TimeSelectBar = () => {
  const [sleepTimeState, setSleepTimeState] = useAtom(inputSleepTimeAtom);
  const [energyState] = useAtom(inputEnergyAtom);
  const [islandState] = useAtom(selectedIslandAtom);
  const [gradientSettingState, setGradientSettingState] = useState("");

  const handleRangeChange = (event: any) => {
    setSleepTimeState(event.target.value);
  }

  useEffect(() => {
    const bgColor = 'rgba(243, 243, 243, 1)';
    const recommendedTimeBgColor = 'rgb(88,195,125)';
    const borderList = bestNapLength(energyState, islandState)
    const gradientSettings = borderList.map((hash, i) => {
      const redundantPower:number = calcRedundantSleepinessPower(hash.daytime.value, hash.nighttime.value, energyState)
      return [
        Math.round(convertSleepinessPowerToTime(hash.daytime.value, energyState)),
        Math.round(convertSleepinessPowerToTime(redundantPower, energyState))
      ]
    }).reduce((accumulator, currentValue) => {
      const start = currentValue[0]/MAX_SLEEP_TIME*100;
      const end = (currentValue[0]+currentValue[1])/MAX_SLEEP_TIME*100;
      return `${accumulator}, ${bgColor} ${start}%, ${recommendedTimeBgColor} ${start}%, ${recommendedTimeBgColor} ${end}%, ${bgColor} ${end}%`;
    }, `${bgColor} 0%`) + `, ${bgColor} 100%`
    setGradientSettingState(gradientSettings);
  },[energyState, islandState])

  return (
      <>
        <div
            className={'mt-10 pb-10 sm:pb-4 pt-4 px-6 w-full max-w-sm bg-white rounded-none lg:rounded-3xl shadow-lg'}
            style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '1024px'}}
        >
          <label className="block text-gray-700 text-sm text-center font-thin" htmlFor="sleep-time">
            sleep time
          </label>
          <div className={'text-center font-medium'}>
            <span className={'text-2xl'}>{UseDisplaySleepTime(sleepTimeState).hours}</span>
            <span className={'text-md'}>時間</span>
            <span className={'text-2xl'}>{UseDisplaySleepTime(sleepTimeState).minutes}</span>
            <span className={'text-md'}>分</span>
          </div>
          <div id={'timeSelectSlider'} className={'mt-4 relative'}>
            <input
                style={{
                  background: `linear-gradient(90deg, ${gradientSettingState})`,
                }}
                type="range"
                className="shadow-inner border slider w-full h-6 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
                value={sleepTimeState}
                min={0}
                max={MAX_SLEEP_TIME}
                onChange={(e) => handleRangeChange(e)}
            ></input>
          </div>
        </div>
      </>
  )
}