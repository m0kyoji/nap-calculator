import { MAX_SLEEP_SCORE, MAX_SLEEP_TIME } from "@/constant/sleep";

export function convertToHoursAndMinutes(time: number) {
  if(time == 0){
    return {hours: 0, minutes: 0}
  } else {
    return {hours: Math.floor(time / 60), minutes: Math.round(time % 60)}
  }
}

export function convertSleepinessPowerToTime(power: number, energy: number) {
  if(power == 0 || energy == 0){
    return 0;
  } else {
    return (power / energy) * (MAX_SLEEP_TIME / 100);
  }
}

export function calcRedundantSleepinessPower(daytime: number, nighttime: number, energy: number) {
  return (energy * MAX_SLEEP_SCORE) - (daytime + nighttime);
}