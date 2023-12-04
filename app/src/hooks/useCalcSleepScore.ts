import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { useEffect, useState } from "react";

export const UseCalcSleepScore = (sleepTime: number) => {
  const [sleepScoreState, setSleepScoreState] = useState<number>(0);

  useEffect(() => {
    setSleepScoreState(sleepTime / MAX_SLEEP_TIME * 100);
  }, [sleepTime])

  return parseInt(String(sleepScoreState));
}