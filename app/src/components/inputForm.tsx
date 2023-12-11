"use client"
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { UseDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import { inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from 'jotai'
import React, { useMemo } from 'react'

export const InputForm = () => {
  const [, setIslandState] = useAtom(selectedIslandAtom);
  const [, setEnergyState] = useAtom(inputEnergyAtom);

  const handleChange = (event: any) => {
    setEnergyState(event.target.value);
  };

  const handleSelectChange = (event: any) => {
    setIslandState(event.target.value);
  }

  const islandDom = useMemo(() => ISLANDS.map((island: IslandsProps, index: number) => (
      <option key={index} value={ island.id }>{ island.kana_name }</option>
  )),[])

  return (
      <div className={'pt-8 px-10 pb-10 bg-white w-auto flex flex-col justify-center items-center rounded-none sm:rounded-3xl shadow-lg gap-y-8'} style={{maxWidth: '640px', margin: '0 auto'}}>
        <div className={'w-full max-w-sm'}>
          <label className="block text-gray-700 text-md font-light text-center mb-2 dark:text-white" htmlFor="select-island">
            どこで寝る？
          </label>
          <select
              defaultValue="greengrass"
              onChange={(event) => handleSelectChange(event)}
              className={'shadow-inner block appearance-none border w-full bg-white text-center px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none text-neutral-800 text-2xl tracking-widest'}
              style={{backgroundColor: "#F3F3F3"}}
          >
            { islandDom }
          </select>
        </div>
        <div className={'w-full max-w-sm'}>
          <label className="block text-gray-700 text-md font-light text-center	mb-2 dark:text-white" htmlFor="kabigon-power">
            今のカビゴンパワーは？
          </label>
          <input
              type="number"
              id={'kabigon-power'}
              className={'shadow-inner shadow appearance-none border rounded text-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-3xl tracking-widest'}
              onChange={(event) => handleChange(event)}
              placeholder={'0'}
              style={{backgroundColor: '#F3F3F3'}}
              maxLength={7}
          />
        </div>
      </div>
  )
}

