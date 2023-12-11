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
      </div>
  )
}