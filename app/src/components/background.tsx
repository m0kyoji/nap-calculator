import { DrawWaves } from "@/components/drawWaves";
import Slider from "@/components/slider";
import { ISLANDS } from "@/constant/islands";
import { useMemo } from "react";

export const Background = () => {
  const islands = useMemo(() => ISLANDS.map((island: IslandsProps) => ({
    'id': island.id,
    'content': `/islands/${ island.name }.png`})),[])

  return (
      <div className={'fixed z-0 inset-0'}>
        <Slider items={islands} />
        <div className={'relative'} style={{marginTop: '-30vh', zIndex: -1}}>
          <DrawWaves num={2}/>
        </div>
      </div>
  )
}