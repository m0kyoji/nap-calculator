import { inputSleepTimeAtom } from "@/lib/atoms";
import { useAtom } from "jotai/index";
import { useEffect, useState } from "react";

export const UseDisplaySleepTime = () => {
  const [timeState, setTimeState] = useState<{hours: number, minutes: number}>({hours: 0, minutes: 0})
  const [sleepTimeState] = useAtom(inputSleepTimeAtom);

  useEffect(() => {
    setTimeState({hours: Math.floor(sleepTimeState / 60), minutes: sleepTimeState % 60});
  },[sleepTimeState]);

  return timeState;
}