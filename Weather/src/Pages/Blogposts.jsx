import React from "react";
import { assets } from "../../assests/assets";
const BlogPost = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-black">Breaking into your own boat</h1>
      <p className="text-gray-700 mb-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.      </p>
      
      <p className="text-gray-700 mb-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <img src= {assets.weather} alt="Locked boat" className="rounded-lg shadow-md" />
        <img src={assets.weather} alt="Boat interior" className="rounded-lg shadow-md" />
        <img src={assets.weather} alt="Author smiling" className="rounded-lg shadow-md" />
      </div>
      
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Nautical miles traveled: 1</h2>
      
      <div className="mt-6">
        <img src={assets.weather} alt="Author on the boat" className="w-full rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default BlogPost;
