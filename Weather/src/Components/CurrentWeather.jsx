import React, { useContext,useEffect, useState } from "react";
import assets from "../../public/assets/assets";
import { loc} from '../App'
import { currentweather } from "../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import { weeklyforecast } from "../App";
// Import Swiper styles
import 'swiper/css';

import '../styles.css';


const WeeklyWeather = () => {
  const location = useContext(loc);
const liveweather = useContext(currentweather);
const forecast = useContext(weeklyforecast);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
  const weeklyWeather = [
    { day: days[today.getDay()+1], weather: forecast?.tommorrow?.averageWeather, temperature: forecast?.tommorrow?.averageTemperature },
    { day: days[today.getDay()+2], weather: forecast?.dayafter?.averageWeather, temperature: forecast?.dayafter?.averageTemperature  },
    { day: days[today.getDay()+3], weather: forecast?.dayafter2?.averageWeather, temperature: forecast?.dayafter2?.averageTemperature  },
    { day: days[today.getDay()+4], weather: forecast?.dayafter3?.averageWeather, temperature: forecast?.dayafter3?.averageTemperature }
  ];


  return (
    <div className="flex flex-col  md:flex-row py-2  rounded-3xl shadow-lg bg-blue-300 ml-4 lg:ml-48 mt-12 mr-4 lg:mr-0 overflow-hidden">
      {/* Main City Weather */}
      <div className="flex flex-col items-center   p-1 rounded-lg">
      <img src={`https://openweathermap.org/img/wn/${liveweather.weather?.[0].icon}@2x.png`} className=""></img>
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <div className="text-lg font-bold ">{location.city},{location.country}</div>
          <div className="text-md font-semibold">{liveweather.weather?.[0].main}({liveweather.weather?.[0].description})</div>
        </div>
        <div className="text-6xl  ">{Math.floor(liveweather?.main?.temp)}°</div>
        </div>
      </div>

      {/* Weekly Weather */}
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={0}
        className="hide-on-small"
        
      >
        {weeklyWeather.map((element,index) => (
          <SwiperSlide>
          <div className="bg-white flex-none  text-black p-1  rounded-lg flex flex-col  gap-10 justify-center overflow-hidden"
              >
                {/* <span className="text-sm font-semibold">{day.day}</span>
                <span className="text-blue-600 text-lg">{day.weather}</span>
                <span className="text-xl font-bold">{day.temperature}°</span> */}
                <div className="flex flex-row items-center gap-9"> 
                  <img src={assets.Cloudandwater} className="w-12"></img>
                  <span className="text-4xl font-bold">{element.temperature}°</span>
                </div> 
                <div className="flex flex-col">
                <span className="text-sm font-semibold text-left">{element.day}</span>
                <span className="text-blue-600 text-lg text-left">{element.weather}</span>
                </div>
                
              </div>
          </SwiperSlide>
        )
      )
}
      </Swiper>
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={-25}
        className="hide-on-large"
        
      >
        {weeklyWeather.map((index,day) => (
          <SwiperSlide>
          <div className="bg-white flex-none  text-black p-1  rounded-lg flex flex-col  gap-10 justify-center overflow-hidden"
              >
                {/* <span className="text-sm font-semibold">{day.day}</span>
                <span className="text-blue-600 text-lg">{day.weather}</span>
                <span className="text-xl font-bold">{day.temperature}°</span> */}
                <div className="flex flex-row items-center gap-9"> 
                  <img src={assets.Cloudandwater} className="w-12"></img>
                  <span className="text-4xl font-bold">38°</span>
                </div> 
                <div className="flex flex-col">
                <span className="text-sm font-semibold text-left">sunday</span>
                <span className="text-blue-600 text-lg text-left">cloudy</span>
                </div>
                
              </div>
          </SwiperSlide>
        )
      )
}
      </Swiper>
     
    </div>
    
  );
};

export default WeeklyWeather;
