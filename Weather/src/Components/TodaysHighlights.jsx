import React, { useContext } from "react";
import assets from "../../public/assets/assets";
import { currentweather } from "../App";

const Highlights = () => {
  const liveweather = useContext(currentweather);
  
  const highlights = [
    { label: "Feel Like", value: `${liveweather?.main?.temp}°`, description: `${liveweather.weather?.[0].description}`},
    { label: "Cloud", value: `${liveweather.clouds?.all}%`, description: liveweather.clouds?.all>70 ? "Heavy" : liveweather.clouds?.all>30? "Medium" :"Light" },
    { label: "Visibility", value:`${liveweather?.visibility/1000}km`, description: liveweather?.visibility>30000?"clear": liveweather?.visibility>=10000  && liveweather?.visibility<=30000 ?"moderate":liveweather?.visibility>=2000  && liveweather?.visibility<10000 ? "low" : "poor"},
    { label: "Humidity", value: `${liveweather?.main?.humidity}%`, description: liveweather?.main?.humidity>80?"Very High":liveweather?.main?.humidity>=50 && liveweather?.main?.humidity<=80?"High":"Low"},
    { label: "Wind", value: `${liveweather?.wind?.speed}m/s`, description: liveweather?.wind?.speed<=3?"Light air":liveweather?.wind?.speed<=5 && liveweather?.wind?.speed>3?"Moderate Breeze" :liveweather?.wind?.speed<=8 && liveweather?.wind.speed>5?"Moderate gale" :"Storm" },
    { label: "Pressure", value: `${liveweather.main?.pressure}Pa`, description: "Normal" },
  ];
  
  return (
    <div className="mr-4 ml-4 lg:ml-48 mt-12 ">
      <h2 className="text-2xl font-bold mb-4 text-left text-black">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-3 text-center text-black flex flex-row justify-between items-center"
          >
            <div className="flex flex-row gap-2 items-center">
            <img src={assets.Cloudandwater} className="w-12 h-12"></img>
            <div className="flex flex-col "> 
            <div className="text-xl font-semibold text-left">{highlight.label}</div>
            <div className="text-gray-500 text-md text-left">{highlight.description}</div>
            </div>
            </div>
            <p className="text-xl font-semibold">{highlight.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
