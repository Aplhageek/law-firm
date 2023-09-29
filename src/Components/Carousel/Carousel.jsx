import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
// import { Pagination, Navigation } from "swiper/modules";
import CarouselCard from "./CarouselCard/CarouselCard";
import NavigationButtons from "./NavigationButtons";

export default function Carousel({data}) {

    
  return (
    <div className="swiper_container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        initialSlide={0}
        allowTouchMove
        className="mySwiper"
      >
        {
          data?.map((ele) =>{
            return (
              <SwiperSlide key={ele.id}> <CarouselCard data={ele}/> </SwiperSlide>
            )
          })
        }

        <NavigationButtons/>
      </Swiper>
    </div>
  );
}
