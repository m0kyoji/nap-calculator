import { DrawWaves } from "@/components/drawWaves";
import Slider from "@/components/slider";
import { ISLANDS } from "@/constant/islands";
import Wave from 'react-wavify'

export const Header = () => {
  const islands = ISLANDS.map((island: IslandsProps) => ({
    'id': island.id,
    'content': `/islands/${ island.name }.png`}))

  return (
      <div className={'grid min-h-full place-items-center bg-white py-12 sm:py-16'} style={{backgroundColor: "#c9f3ff"}}>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">おひるね計算機</h1>
        <div className={'flex justify-center'}>
          <Slider items={islands} />
        </div>
        {/*<DrawWaves num={5}/>*/}
      </div>
  )
}