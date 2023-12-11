"use client"
import { selectedIslandAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { EffectFade } from 'swiper/modules';

type SlideItem = {
  id: number
  content: any
}

type SliderProps = {
  items: SlideItem[]
}

const Slider = ({ items }: SliderProps) => {
  const [islandState] = useAtom(selectedIslandAtom);
  const swiperRef: any = useRef(null);

  const changeSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index)
    }
  };

  useEffect(() => {
    changeSlide(islandState - 1)
  },[islandState])

  return (
      <div style={{width: '100vw', height: '100vh'}}>
        <Swiper
            modules={[EffectFade]}
            ref={swiperRef}
            slidesPerView={1}
            centeredSlides={true}
            allowTouchMove={false}
            effect={'fade'}
            pagination={{
              clickable: true,
            }}>
          {items.map((item) => (
              <SwiperSlide key={item.id} style={{width: '100vw', height: '100vh'}}>
                <Image src={item.content} alt="island_images" fill style={{ objectFit: 'contain' }}/>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}

export default Slider