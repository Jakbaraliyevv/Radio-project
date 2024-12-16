import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img29 from "../../img/img.png";
function Showcase() {
  return (
    <section className="w-[90%] m-auto mt-5">
      <div className="novinki__bottom">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="">
              <img className="w-[100%]" src={img29} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-[100%]" src={img29} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-[100%]" src={img29} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-[100%]" src={img29} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-[100%]" src={img29} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img className="w-[100%]" src={img29} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Showcase;
