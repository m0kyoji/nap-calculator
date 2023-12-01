"use client"
import { selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

type SlideItem = {
  id: number
  content: any
}

type SliderProps = {
  items: SlideItem[]
}

const Slider = ({ items }: SliderProps) => {
  // const [islandState, setIslandState] = useAtom(selectedIslandAtom);

  return (
      <Swiper spaceBetween={50} slidesPerView={1}>
        {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div><Image src={item.content} alt="island_images" width={200} height={200}/></div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default Slider