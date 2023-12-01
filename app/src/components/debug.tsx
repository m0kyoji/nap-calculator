"use client"

import { inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from 'jotai'
import React from 'react'

export const Debug = () => {
  const [islandState] = useAtom(selectedIslandAtom);
  const [energyState] = useAtom(inputEnergyAtom);
  const [sleepTimeState] = useAtom(inputSleepTimeAtom);

  return (
      <section>
        <p>islandState: {islandState}</p>
        <p>energyState: {energyState}</p>
        <p>sleepTimeState: {sleepTimeState}</p>
      </section>
  )
}