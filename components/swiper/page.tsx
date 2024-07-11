"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {data_product} from '../../interfaces/products'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ProductCard from '../products/page'
import './style.css';

import { FreeMode, Pagination } from 'swiper/modules';

export default function App({data}:any) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
         {
          data?.map((e:data_product, i:number) => {
            return (
              <SwiperSlide key={i}>
                <ProductCard datas={e}/>
              </SwiperSlide>
            )
          })
         }
      </Swiper>
    </>
  );
}
