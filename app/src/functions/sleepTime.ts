import { MAX_SLEEP_TIME } from "@/constant/sleep";

export function convertToHoursAndMinutes(time: number) {
  if(time == 0){
    return {hours: 0, minutes: 0}
  } else {
    return {hours: Math.floor(time / 60), minutes: parseInt(String(time % 60))}
  }
}

export function convertSleepinessPowerToTime(power: number, energy: number) {
  if(power == 0 || energy == 0){
    return 0;
  } else {
    return (power / energy) * (MAX_SLEEP_TIME / 100);
  }
}