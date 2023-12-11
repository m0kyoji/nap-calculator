"use client"
import { MAX_SLEEP_TIME } from "@/constant/sleep";
import { UseDisplaySleepTime } from "@/hooks/useDisplaySleepTime";
import { inputSleepTimeAtom } from "@/lib/atoms";
import { useAtom } from "jotai/index";

export const TimeSelectBar = () => {
  const [sleepTimeState, setSleepTimeState] = useAtom(inputSleepTimeAtom);

  const handleRangeChange = (event: any) => {
    setSleepTimeState(event.target.value);
  }

  return (
      <>
        <div
            className={'mt-10 py-4 px-6 w-full max-w-sm bg-white rounded-none lg:rounded-3xl shadow-lg'}
            style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '1024px'}}
        >
          <label className="block text-gray-700 text-sm text-center dark:text-white font-thin" htmlFor="sleep-time">
            sleep time
          </label>
          <div className={'text-center font-medium'}>
            <span className={'text-2xl'}>{UseDisplaySleepTime(sleepTimeState).hours}</span>
            <span className={'text-md'}>時間</span>
            <span className={'text-2xl'}>{UseDisplaySleepTime(sleepTimeState).minutes}</span>
            <span className={'text-md'}>分</span>
          </div>
          <div className={'mt-4'}>
            <input
                id={'timeSelectSlider'}
                type="range"
                className="relative slider w-full h-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                value={sleepTimeState}
                min={0}
                max={MAX_SLEEP_TIME}
                onChange={(e) => handleRangeChange(e)}
            ></input>
          </div>
        </div>
      </>
  )
}