"use client"
import Slider from "@/components/slider";
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { calcTimeAtom, inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'

export const InputForm = () => {
  const [timeState, setTimeState] = useAtom(calcTimeAtom)
  const [, setIslandState] = useAtom(selectedIslandAtom);
  const [, setEnergyState] = useAtom(inputEnergyAtom);
  const [sleepTimeState, setSleepTimeState] = useAtom(inputSleepTimeAtom);

  const islands = ISLANDS.map((island: IslandsProps) => ({
    'id': island.id,
    'content': `/islands/${ island.name }.png`}))

  const handleChange = (event: any) => {
    setEnergyState(event.target.value);
  };

  const handleSelectChange = (event: any) => {
    setIslandState(event.target.value);
  }

  const handleRangeChange = (event: any) => {
    setSleepTimeState(event.target.value);
    const hours = Math.floor(event.target.value / 60);
    const minutes = event.target.value % 60;
    setTimeState({hours: hours, minutes: minutes });
  }

  return (
      <div>
        <div>
          <div>
            <div>
              どこで寝る？
            </div>
            <select defaultValue="greengrass" onChange={(event) => handleSelectChange(event)}>
              {
                ISLANDS.map((island: IslandsProps, index: number) => (
                    <option key={index} value={ island.id }>{ island.kana_name }</option>
                ))
              }
            </select>
          </div>
          <div>
            <div>
              今のカビゴンパワー
            </div>
            <input
                type="text"
                onChange={(event) => handleChange(event)}
            />
          </div>
          <div>
            <div>
              どのくらい寝る？
            </div>
            <input
                type="range"
                className="slider"
                value={sleepTimeState}
                min={0}
                max={MAX_SLEEP_TIME}
                onChange={(e) => handleRangeChange(e)}
            ></input>
            <p>{`${timeState.hours}時間${timeState.minutes}分`}</p>
          </div>
        </div>
        <Slider items={islands} />
      </div>
  )
}

