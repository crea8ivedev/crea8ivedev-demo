"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const pagination = {
    clickable: true,
  };

  const slides = 5;

  return (
    <div className="home-hero-root">
      <div className="main-container-root home-hero-wraper">
        <Swiper
          breakpoints={{
            280: { slidesPerView: 1 },
            768: { pagination: false },
          }}
          navigation={true}
          pagination={pagination}
          modules={[Navigation, Pagination]}
          loop={true}
          className="mySwiper h-full hero_swiper"
        >
          {Array.from({ length: slides }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="h-full relative">
                <div className="hero-wrapper h-full">
                  <div className="flex flex-col items-center text-center pt-16 2xl:pt-32">
                    <Image
                      src="/assets/icons/revvit-icon.png"
                      alt="Logo"
                      width={56}
                      height={40}
                    />
                    <h1 className="hero-title">Rev Up Your Transactions</h1>
                    <h3 className="hero-sub-title">
                      Connecting Vehicle Buyers & Sellers
                    </h3>
                    <p className="hero-description">
                      With our platform, you can easily connect with a diverse
                      range of buyers and sellers, all from the comfort of your
                      own device.
                    </p>
                    <button className="hero-btn">Get Started Today!</button>
                  </div>
                  <div className="hero-wrapper-img">
                    <Image
                      src="/assets/images/hero-car.png"
                      alt="Logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="hero-wrapper-home-car-img"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
    </div>
  );
};

export default Hero;
