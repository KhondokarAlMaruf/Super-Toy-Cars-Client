/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import car1 from "../../Images/slider/s-1.jpg";
import car2 from "../../Images/slider/s-2.jpg";
import car3 from "../../Images/slider/s-3.jpg";
import car4 from "../../Images/slider/s-4.jpg";
import car5 from "../../Images/slider/s-5.jpg";
import car6 from "../../Images/slider/s-6.jpg";
const WhatsNew = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-6xl font-semibold font-teko text-sky-500 leading-relaxed mb-10">
        What's New Now
      </h1>
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={car1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={car6} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default WhatsNew;
