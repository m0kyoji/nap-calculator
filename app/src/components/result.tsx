"use client"

import { ENERGY_BORDER } from "@/constant/energy";
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { calcTimeAtom, inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'

export const Result = () => {
  const [islandState] = useAtom(selectedIslandAtom);
  const [energyState] = useAtom(inputEnergyAtom);
  const [sleepTimeState] = useAtom(inputSleepTimeAtom);
  const [timeState] = useAtom(calcTimeAtom);

  const [pokemonNumState, setPokemonNumState] = useState<number>(0)

  useEffect(() => {
    const island = ISLANDS.find((island) => island.id == islandState) || ISLANDS[0]
    const filteredEntries = Object.entries(ENERGY_BORDER[island.name]);
    const num: [string, any] = filteredEntries.filter((value: [string, any]) => value[1] <= Math.trunc((energyState) * (sleepTimeState / (MAX_SLEEP_TIME) * 100))).slice(-1)[0]
    setPokemonNumState(parseInt(num[0], 10));
  },[islandState, energyState, sleepTimeState])

  return (
      <>
        <div>
          <div>
            <span>時間: </span>
            <span>{timeState.hours}時間{timeState.minutes}分</span>
          </div>
          <div>
            <span>予想睡眠スコア: </span>
            <span>{parseInt(String(sleepTimeState / MAX_SLEEP_TIME * 100))}</span>
          </div>
          <div>
            <span>予想ねむけパワー: </span>
            <span>{Math.trunc((energyState) * (sleepTimeState / MAX_SLEEP_TIME * 100))}</span>
          </div>
          <div>
            <span>予想ポケモン数: </span>
            <span>{pokemonNumState}匹</span>
          </div>
        </div>
      </>
  )
}