"use client"
import { ISLANDS } from "@/constant/islands";
import { bestNapLength } from "@/functions/napLength";
import { calcRedundantSleepinessPower, convertSleepinessPowerToTime } from "@/functions/sleepTime";
import { inputEnergyAtom, inputSleepTimeAtom, napLengthAtom, selectedIslandAtom } from "@/lib/atoms";
import { t } from "i18next";
import { useAtom } from 'jotai'
import React, { useEffect, useMemo } from 'react'
import { useCurrentLocale } from 'next-i18n-router/client';
import { i18nConfig } from "@/lib/i18n/config";

export const InputForm = () => {
  const [islandState, setIslandState] = useAtom(selectedIslandAtom);
  const [energyState, setEnergyState] = useAtom(inputEnergyAtom);
  const [napLengthState, setNapLengthState] = useAtom(napLengthAtom);
  const [, setSleepTimeState] = useAtom(inputSleepTimeAtom);
  const locale = useCurrentLocale(i18nConfig) || "";

  const handleChange = (event: any) => {
    setEnergyState(event.target.value);
  };

  const handleSelectChange = (event: any) => {
    setIslandState(event.target.value);
  }

  useEffect(() => {
    setNapLengthState(bestNapLength(energyState, islandState))
  }, [energyState, islandState])

  useEffect(() => {
    const redundantPower: number = calcRedundantSleepinessPower(napLengthState[0].daytime.value, napLengthState[0].nighttime.value, energyState)
    setSleepTimeState(convertSleepinessPowerToTime(napLengthState[0].daytime.value + ( redundantPower / 2 ), energyState));
  }, [napLengthState])

  const islandDom = useMemo(() => ISLANDS.map((island: IslandsProps, index: number) => (
      <option key={ index } value={ island.id }>{ island.locales[locale] }</option>
  )), [])

  return (
      <div className={ 'p-2' }>
        <div
            className={ 'pt-8 px-10 pb-10 bg-white w-auto flex flex-col justify-center items-center rounded-3xl shadow-lg gap-y-8' }
            style={ { maxWidth: '640px', margin: '0 auto' } }>
          <div className={ 'w-full max-w-sm' }>
            <label className="block text-gray-700 text-md font-light text-center mb-2" htmlFor="select-island">
              { t('top where sleep') }
            </label>
            <select
                id={ 'select-island' }
                defaultValue="greengrass"
                onChange={ (event) => handleSelectChange(event) }
                className={ 'shadow-inner block appearance-none border w-full bg-white text-center px-4 py-2 pr-8 rounded leading-tight focus:outline-none text-neutral-800 text-2xl tracking-widest' }
                style={ { backgroundColor: "#F3F3F3" } }
            >
              { islandDom }
            </select>
          </div>
          <div className={ 'w-full max-w-sm' }>
            <label className="block text-gray-700 text-md font-light text-center mb-2" htmlFor="kabigon-power">
              { t('top Snorlax energy') }
            </label>
            <input
                type="number"
                id={ 'kabigon-power' }
                className={ 'shadow-inner appearance-none border rounded text-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-3xl tracking-widest' }
                onChange={ (event) => handleChange(event) }
                placeholder={ '0' }
                style={ { backgroundColor: '#F3F3F3' } }
            />
          </div>
        </div>
      </div>
  )
}

