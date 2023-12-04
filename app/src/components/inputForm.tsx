"use client"
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { UseDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import { inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from 'jotai'
import React from 'react'

export const InputForm = () => {
  const [, setIslandState] = useAtom(selectedIslandAtom);
  const [, setEnergyState] = useAtom(inputEnergyAtom);
  const [sleepTimeState, setSleepTimeState] = useAtom(inputSleepTimeAtom);

  const handleChange = (event: any) => {
    setEnergyState(event.target.value);
  };

  const handleSelectChange = (event: any) => {
    setIslandState(event.target.value);
  }

  const handleRangeChange = (event: any) => {
    setSleepTimeState(event.target.value);
  }

  return (
      <div className={'flex flex-col justify-center items-center'}>
        <div>
          <div className={'py-4'}>
            <label className="block text-gray-700 text-sm font-bold text-center mb-2" htmlFor="select-island">
              どこで寝る？
            </label>
            <select
                defaultValue="greengrass"
                onChange={(event) => handleSelectChange(event)}
                className={'block appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'}
            >
              {
                ISLANDS.map((island: IslandsProps, index: number) => (
                    <option key={index} value={ island.id }>{ island.kana_name }</option>
                ))
              }
            </select>
          </div>
          <div className={'py-4'}>
            <label className="block text-gray-700 text-sm font-bold text-center	mb-2" htmlFor="kabigon-power">
              今のカビゴンパワー
            </label>
            <input
                type="number"
                id={'kabigon-power'}
                className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'}
                onChange={(event) => handleChange(event)}
                placeholder={"今のカビゴンパワー"}
            />
          </div>
          <div className={'py-4'}>
            <label className="block text-gray-700 text-sm font-bold text-center mb-2" htmlFor="sleep-time">
              どのくらい寝る？
            </label>
            <input
                type="range"
                className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                value={sleepTimeState}
                min={0}
                max={MAX_SLEEP_TIME}
                onChange={(e) => handleRangeChange(e)}
            ></input>
            <p>{`${UseDisplaySleepTime(sleepTimeState).hours}時間${UseDisplaySleepTime(sleepTimeState).minutes}分`}</p>
          </div>
        </div>
      </div>
  )
}

