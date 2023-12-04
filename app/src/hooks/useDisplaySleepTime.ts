import { useEffect, useState } from "react";

export const UseDisplaySleepTime = (time: number) => {
  const [timeState, setTimeState] = useState<{hours: number, minutes: number}>({hours: 0, minutes: 0})

  useEffect(() => {
    setTimeState({hours: Math.floor(time / 60), minutes: time % 60});
  },[time]);

  return timeState;
}