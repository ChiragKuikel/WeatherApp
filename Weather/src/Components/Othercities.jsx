import React from "react";
import assets from "../../public/assets/assets";

const OtherCities = () => {
  const cities = [
    { name: "Pokhara", temp: "20°", condition: "Cloudy. High: 18° Low: 25°" },
    { name: "Chitwan", temp: "19°", condition: "Clear Sky. High: 20° Low: 25°" },
    { name: "Biratnagar", temp: "22°", condition: "Clear Sky. High: 17° Low: 22°" },
    { name: "Birgunj", temp: "20°", condition: "Cloudy. High: 17° Low: 26°" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg    mt-12  text-black mr-4 pr-4 ml-4 lg:ml-12">
      <h2 className="text-xl font-bold mb-4">Other Cities</h2>
      <ul className="space-y-4">
        {cities.map((city, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 rounded-lg p-3"
          >
            <div className="flex flex-row gap-2">
            <div>
            <img src= {assets.Cloudandwater} className="w-12 h-12"></img>
              </div>
              <div className="flex flex-col ">
              <div className="text-lg font-semibold text-left">{city.name}</div>
              <div className="text-sm text-gray-500">{city.condition}</div>
              </div>
            </div>
            <div className="text-2xl font-bold">{city.temp}</div>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 w-full">
        See More
      </button>
    </div>
  );
};

export default OtherCities;
