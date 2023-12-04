import { ENERGY_BORDER } from "@/constant/energy";
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { inputEnergyAtom, inputSleepTimeAtom, selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from "jotai/index";
import { useEffect, useState } from "react";

export const useCalcEncounterNumb = () => {
  const [numState, setNumState] = useState<number>(0)
  const [islandState] = useAtom(selectedIslandAtom);
  const [energyState] = useAtom(inputEnergyAtom);
  const [sleepTimeState] = useAtom(inputSleepTimeAtom);

  useEffect(() => {
    const island = ISLANDS.find((island) => island.id == islandState) || ISLANDS[0]
    const filteredEntries = Object.entries(ENERGY_BORDER[island.name]);
    const num: [string, any] = filteredEntries.filter((value: [string, any]) => value[1] <= Math.trunc((energyState) * (sleepTimeState / (MAX_SLEEP_TIME) * 100))).slice(-1)[0]
    setNumState(parseInt(num[0], 10));
  },[islandState, energyState, sleepTimeState])

  return numState;
}