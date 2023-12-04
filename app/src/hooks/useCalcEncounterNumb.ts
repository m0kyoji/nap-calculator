import { ENERGY_BORDER } from "@/constant/energy";
import { ISLANDS } from "@/constant/islands";
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { useEffect, useState } from "react";

export const useCalcEncounterNumb = (islandId: number, sleepTime: number, energy: number) => {
  const [numState, setNumState] = useState<number>(0)

  useEffect(() => {
    const island = ISLANDS.find((island) => island.id == islandId) || ISLANDS[0]
    const filteredEntries = Object.entries(ENERGY_BORDER[island.name]);
    const num: [string, any] = filteredEntries.filter((value: [string, any]) => value[1] <=(energy) * (sleepTime / (MAX_SLEEP_TIME) * 100)).slice(-1)[0]
    setNumState(parseInt(num[0], 10));
  },[islandId, energy, sleepTime])

  return Math.round(numState);
}