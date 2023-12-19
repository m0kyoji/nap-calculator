import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { calcRedundantSleepinessPower, convertSleepinessPowerToTime } from "@/functions/sleepTime";

export const genSleepTimeSliderBGCValue = (energy: number, island: number, borderList: HashPair[]) => {
  const bgColor = 'rgba(243, 243, 243, 1)';
  const recommendedTimeBgColor = 'rgb(88,195,125)';
  return borderList.map((hash, i) => {
    const redundantPower: number = calcRedundantSleepinessPower(hash.daytime.value, hash.nighttime.value, energy)
    return [
      Math.round(convertSleepinessPowerToTime(hash.daytime.value, energy)),
      Math.round(convertSleepinessPowerToTime(redundantPower, energy))
    ]
  }).reduce((accumulator, currentValue) => {
    const start = currentValue[0] / MAX_SLEEP_TIME * 100;
    const end = ( currentValue[0] + currentValue[1] ) / MAX_SLEEP_TIME * 100;
    return `${ accumulator }, ${ bgColor } ${ start }%, ${ recommendedTimeBgColor } ${ start }%, ${ recommendedTimeBgColor } ${ end }%, ${ bgColor } ${ end }%`;
  }, `${ bgColor } 0%`) + `, ${ bgColor } 100%`;
}