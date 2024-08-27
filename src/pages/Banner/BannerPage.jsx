import React from "react";
// import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

//Banner Data
import { items } from "./BannerData";

const BannerPage = () => {
  return (
    <>
      <div className="bg-slate-200 pb-12 pt-1 dark:bg-slate-900">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          className="mySwiper max-w-screen-xl mt-3"
        >
          {items.map((value, index) => (
            <SwiperSlide key={value.id}>
              <img src={value.image} alt={value.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BannerPage;
