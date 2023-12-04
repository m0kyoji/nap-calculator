import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { inputEnergyAtom, inputSleepTimeAtom } from "@/lib/atoms";
import { useAtom } from "jotai/index";
import { useEffect, useState } from "react";

export const UseCalcNemukePower = () => {
  const [nemukePowerState, setNemukePowerState] = useState<number>(0);
  const [energyState] = useAtom(inputEnergyAtom);
  const [sleepTimeState] = useAtom(inputSleepTimeAtom);

  useEffect(() => {
    setNemukePowerState(Math.trunc((energyState) * (sleepTimeState / MAX_SLEEP_TIME * 100)));
  },[energyState, sleepTimeState])

  return nemukePowerState;
}