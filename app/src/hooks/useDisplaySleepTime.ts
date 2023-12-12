import { convertToHoursAndMinutes } from "@/functions/sleepTime";
import { useEffect, useState } from "react";

export const UseDisplaySleepTime = (time: number) => {
  const [timeState, setTimeState] = useState<{hours: number, minutes: number}>({hours: 0, minutes: 0})

  useEffect(() => {
    setTimeState(convertToHoursAndMinutes(time));
  },[time]);

  return timeState;
}