import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import './Properties.css';
import data from '../../utils/slider.json';
import { Slidersettings } from '../../utils/common.js';
const Properties = () => {
  return (
    <section className="p-wrapper">
      <div className="paddings innerWidth p-container">
        <div className="p-head flexColStart">
          <span className='orangeText'>People's Choices</span>
          <span className='primaryText'>Most Popular Properties</span>
        </div>
        <Swiper {...Slidersettings}>
            <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColCenter p-card">
                <img src={card.image} alt='home' />
                <span className="secondaryText p-price">
                  <span style={{ color: "orange" }}>₹</span>
                  <span>{card.price}</span>
                </span>

                <span className='primaryText'>{card.name}</span>
                <span className='secondaryText'>{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Properties;


const SliderButtons = () => {
    const swiper=useSwiper();
    return (
        <div className=" flexCenter p-btn">
          <button onClick={() => swiper.slidePrev()}>&lt;</button>
          <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}