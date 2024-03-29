import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { useEffect, useState } from "react";

export const useCalcNemukePower = (sleepTime: number, energy: number) => {
  const [nemukePowerState, setNemukePowerState] = useState<number>(0);

  useEffect(() => {
    setNemukePowerState(( energy ) * ( sleepTime / MAX_SLEEP_TIME * 100 ));
  }, [energy, sleepTime])

  return nemukePowerState;
}