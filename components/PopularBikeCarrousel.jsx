"use client";
import Bike from "./Bike";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Pagination from "swiper/modules";

const PopularBikeCarrousel = ({ bikes }) => {
  return (
    <Swiper>
      {bikes.map((bike) => (
        <SwiperSlide className="text-white" key={bike._id}>
          <Bike bike={bike} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularBikeCarrousel;
