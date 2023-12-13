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
          <DrawWaves num={1} color={'#007bff'} height={'30vh'}/>
          <DrawWaves num={1} color={'#4af2a1'} height={'40vh'}/>
        </div>
      </div>
  )
}