"use client"
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { genSleepTimeSliderBGCValue } from "@/functions/color";
import { useDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import { inputEnergyAtom, inputSleepTimeAtom, napLengthAtom, selectedIslandAtom } from "@/lib/atoms";
import { t } from "i18next";
import { useAtom } from "jotai";
import { useMemo } from "react";

export const TimeSelectBar = () => {
  const [sleepTimeState, setSleepTimeState] = useAtom(inputSleepTimeAtom);
  const [energyState] = useAtom(inputEnergyAtom);
  const [islandState] = useAtom(selectedIslandAtom);
  const [napLengthState] = useAtom(napLengthAtom);

  const handleChange = (event: any) => {
    setSleepTimeState(event.target.value);
  }

  const gradientValue = useMemo(() => {
    return genSleepTimeSliderBGCValue(energyState, islandState, napLengthState);
  }, [napLengthState])

  return (
      <>
        <div
            className={ 'mt-10 pb-10 sm:pb-4 pt-4 px-6 w-full max-w-sm bg-white rounded-none lg:rounded-3xl shadow-lg' }
            style={ { marginLeft: 'auto', marginRight: 'auto', maxWidth: '1024px' } }
        >
          <label className="block text-gray-700 text-sm text-center font-thin" htmlFor="sleep-time">
            sleep time
          </label>
          <div className={ 'text-center font-medium' }>
            <span className={ 'text-2xl' }>{ useDisplaySleepTime(sleepTimeState).hours }</span>
            <span className={ 'text-md mr-1' }>{ t('hours') }</span>
            <span className={ 'text-2xl' }>{ useDisplaySleepTime(sleepTimeState).minutes }</span>
            <span className={ 'text-md' }>{ t('minutes') }</span>
          </div>
          <div id={ 'timeSelectSlider' } className={ 'mt-4 relative' }>
            <input
                id={ 'sleep-time' }
                style={ {
                  background: `linear-gradient(90deg, ${ gradientValue })`,
                } }
                type="range"
                className="shadow-inner border slider w-full h-6 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
                value={ sleepTimeState }
                min={ 0 }
                max={ MAX_SLEEP_TIME }
                onChange={ (e) => handleChange(e) }
            ></input>
          </div>
        </div>
      </>
  )
}