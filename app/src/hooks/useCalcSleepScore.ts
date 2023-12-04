import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { inputSleepTimeAtom } from "@/lib/atoms";
import { useAtom } from "jotai/index";
import { useEffect, useState } from "react";

export const UseCalcSleepScore = () => {
  const [sleepScoreState, setSleepScoreState] = useState<number>(0);
  const [sleepTimeState] = useAtom(inputSleepTimeAtom);

  useEffect(() => {
    setSleepScoreState(parseInt(String(sleepTimeState / MAX_SLEEP_TIME * 100)));
  }, [sleepTimeState])

  return sleepScoreState;
}