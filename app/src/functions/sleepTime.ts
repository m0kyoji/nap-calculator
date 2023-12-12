import { MAX_SLEEP_TIME } from "@/constant/sleep";

export function convertToHoursAndMinutes(time: number) {
  console.log(time);
  console.log({hours: Math.floor(time / 60), minutes: parseInt(String(time % 60))})
  return {hours: Math.floor(time / 60), minutes: parseInt(String(time % 60))}
}

export function convertSleepinessPowerToTime(power: number, energy: number) {
  return (power / energy) * (MAX_SLEEP_TIME / 100);
}