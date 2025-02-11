import React from "react";
import assets from "../../public/assets/assets";

const Highlights = () => {
  const highlights = [
    { label: "Feel Like", value: "7°", description: "Normal" },
    { label: "Cloud", value: "18°", description: "Heavy" },
    { label: "Rain", value: "2%", description: "Normal" },
    { label: "Humidity", value: "65%", description: "Heavy" },
    { label: "Ultraviolet", value: "7", description: "Heavy" },
    { label: "Cloudy", value: "26 km/h", description: "Normal" },
  ];

  return (
    <div className="mr-4 ml-4 lg:ml-48 mt-12">
      <h2 className="text-2xl font-bold mb-4 text-left">Today's Highlights</h2>
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
            <p className="text-2xl font-bold">{highlight.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
