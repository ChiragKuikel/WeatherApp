import React, { useContext,useEffect, useState } from "react";
import assets from "../../public/assets/assets";
import { loc} from '../App'
import { currentweather } from "../App";
import axios from 'axios';
const WeeklyWeather = () => {
  const weeklyWeather = [
    { day: "Friday", weather: "Sun", temperature: 14 },
    { day: "Saturday", weather: "Wind", temperature: 16 },
    { day: "Monday", weather: "Rainy Day", temperature: 12 },
  ];
const location = useContext(loc);
const liveweather = useContext(currentweather);


  return (
    <div className="flex flex-col  md:flex-row p-3  rounded-3xl shadow-lg bg-blue-300 ml-4 lg:ml-48 mt-12 mr-4 lg:mr-0">
      {/* Main City Weather */}
      <div className="flex flex-col items-center   p-1 rounded-lg">
      <img src={assets.Cloudandwater} className=""></img>
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <div className="text-xl font-bold ">{location.city},{location.country}</div>
          <div className="text-md font-semibold">{liveweather.weather?.[0].main}({liveweather.weather?.[0].description})</div>
        </div>
        <div className="text-7xl  ">28°</div>
        </div>
      </div>

      {/* Weekly Weather */}
      <div >
        <div className="flex  ml-4 md:ml-0 gap-8 md:gap-6 overflow-hidden ">
          {weeklyWeather.map((day, index) => (
            <div
              key={index}
              className="bg-white flex-none  text-black p-3  rounded-lg flex flex-col  gap-12 justify-center overflow-hidden"
            >
              {/* <span className="text-sm font-semibold">{day.day}</span>
              <span className="text-blue-600 text-lg">{day.weather}</span>
              <span className="text-xl font-bold">{day.temperature}°</span> */}
              <div className="flex flex-row items-center gap-10"> 
                <img src={assets.Cloudandwater} className="w-12"></img>
                <span className="text-4xl font-bold">{day.temperature}°</span>
              </div> 
              <div className="flex flex-col">
              <span className="text-sm font-semibold text-left">{day.day}</span>
              <span className="text-blue-600 text-lg text-left">{day.weather}</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyWeather;
