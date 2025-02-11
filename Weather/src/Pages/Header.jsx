import React, { useContext } from 'react'
import assets from '../../public/assets/assets'
import { useState } from 'react';
import { Menu, Home, BookOpen, Map, Image, Video, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Search } from "lucide-react"; // For the search icon
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const[search,setSearch] = useState(false);
  return (
      <div className='flex flex-row items-center justify-between bg-white p-4 pt-0 sm:mx-3 lg:mx-48 rounded-b-[2vw] '>
        <div className='flex items-center lg:hidden gap-[55vw]'>
        <img src={assets.Cloudandwater} alt='paxi' className='flex-none '/>
        <div className='flex'>
          {/* Search button */}
          <div onClick={()=>{setSearch(!search)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"  viewBox="0 0 24 24" className='flex-none cursor-pointer'><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
        c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
        M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
        z"  /></svg>
        </div>
        {/* Expand button */}
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" class="ionicon" viewBox="0 0 512 512" className='flex-none cursor-pointer' onClick={toggleSidebar}><path fill="none" stroke="Black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"/></svg>
        </div>
        </div>
        </div>

        <div className='flex flex-row text-black items-center pt-6 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="24px"  viewBox="0 0 24 24" className='hidden lg:block'><g>
                <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"/>
                <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"/>
            </g></svg>
            <div className='text-md hidden lg:block'>Your Location</div>
        </div>
        {/* Code for search bar only */}
      <div className='flex flex-row  relative w-[35vw] hidden lg:block'>
        <input type='text' placeholder='search...'  style={{border:'none',outline:'none'}} className='bg-gray-200 text-black w-[35vw] justify-center rounded' />
        
       <div className='absolute right-0 bg-gray-200 top-9 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"  viewBox="0 0 24 24"><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
        c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
        M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
        z"  /></svg>
        </div>
    </div>
    <div className='flex flex-row pt-6 '>
    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"  viewBox="0 0 24 24" className='hidden lg:block' ><path d="M18.79,15.343c-0.35-0.35-0.79-0.56-1.26-0.61v-4.54c0-1.48-0.58-2.87-1.62-3.91
            c-0.62-0.6-1.36-1.06-2.15-1.33v-0.06c0-0.94-0.71-1.74-1.61-1.81c-0.49-0.04-0.98,0.12-1.34,0.45c-0.36,0.33-0.57,0.8-0.57,1.3
            v0.12c-2.23,0.74-3.77,2.87-3.77,5.24v4.54c-1.06,0.12-1.88,1.02-1.88,2.11v0.53c0,1.17,0.95,2.12,2.12,2.12h3.59
            c0.14,0.81,0.85,1.43,1.7,1.43s1.56-0.62,1.7-1.43h3.59c1.17,0,2.12-0.95,2.12-2.12v-0.53C19.41,16.273,19.19,15.743,18.79,15.343z
            M18.41,17.373c0,0.62-0.5,1.12-1.12,1.12H6.71c-0.62,0-1.12-0.5-1.12-1.12v-0.53c0-0.62,0.5-1.12,1.12-1.12
            c0.42,0,0.76-0.34,0.76-0.77v-4.76c0-1.99,1.33-3.77,3.24-4.34c0.32-0.09,0.53-0.38,0.53-0.71v-0.31c0-0.22,0.09-0.42,0.25-0.56
            c0.14-0.13,0.32-0.2,0.51-0.2h0.07c0.38,0.03,0.69,0.4,0.69,0.82v0.25c0,0.33,0.21,0.62,0.53,0.71c0.71,0.22,1.38,0.61,1.91,1.14
            c0.86,0.85,1.33,1.99,1.33,3.2v4.76c0,0.21,0.08,0.4,0.22,0.55c0.15,0.14,0.33,0.22,0.54,0.22c0.3,0,0.58,0.11,0.79,0.33
            c0.22,0.21,0.33,0.49,0.33,0.79V17.373z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"  viewBox="0 0 24 24" className='hidden lg:block' ><path d="M18.438,4.954H16.5c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372c0-0.262-0.23-0.512-0.5-0.5
                c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408h-7c0-0.346,0-0.691,0-1.036c0-0.124,0-0.248,0-0.372
                c0-0.262-0.23-0.512-0.5-0.5c-0.271,0.012-0.5,0.22-0.5,0.5c0,0.469,0,0.939,0,1.408H5.562c-1.378,0-2.5,1.122-2.5,2.5v11
                c0,1.379,1.122,2.5,2.5,2.5h12.875c1.379,0,2.5-1.121,2.5-2.5v-11C20.938,6.076,19.816,4.954,18.438,4.954z M5.562,5.954H7.5
                c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5c0-0.197,0-0.394,0-0.592
                h7c0,0.073,0,0.147,0,0.22c0,0.124,0,0.248,0,0.372c0,0.262,0.23,0.512,0.5,0.5c0.271-0.012,0.5-0.22,0.5-0.5
                c0-0.197,0-0.394,0-0.592h1.937c0.827,0,1.5,0.673,1.5,1.5v1.584H4.062V7.454C4.062,6.627,4.735,5.954,5.562,5.954z M18.438,19.954
                H5.562c-0.827,0-1.5-0.673-1.5-1.5v-8.416h15.875v8.416C19.938,19.281,19.265,19.954,18.438,19.954z"/></svg>

    </div>
    <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-44 bg-white shadow-lg z-50 overflow-y-auto rounded-tr-4xl rounded-br-4xl"
      >
        {/* Logo */}
        <div className="w-20 h-8 p-2 ml-10">
            <img src={assets.Cloudandwater} alt="Logo" className="" />
          </div>

        {/* Menu Items */}
        <nav className="mt-12 text-black -ml-2">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
              <Home size={20} />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
              <BookOpen size={20} />
              <span>Blogs</span>
            </li>
            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
              <Map size={20} />
              <span>Map</span>
            </li>
            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
              <Image size={20} />
              <span>Photos</span>
            </li>
            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
              <Video size={20} />
              <span>Video</span>
            </li>
            <li className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
              <Phone size={20} />
              <span>Contact</span>
            </li>
          </ul>
        </nav>
      </motion.div>
      {/*Another same side bar that is displayed only on large screens with some slight modification */}
      <div
        className="fixed top-0 left-0 h-full w-36 bg-white shadow-lg z-50 overflow-y-auto rounded-tr-4xl rounded-br-4xl hidden lg:block"
      >
        {/* Logo */}
        <div className="w-20 h-8 p-2  ml-8">
            <img src={assets.Cloudandwater} alt="Logo" className="" />
          </div>

        {/* Menu Items */}
        <nav className="mt-12 text-black -ml-2">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100">
              <Home size={20} />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100">
              <BookOpen size={20} />
              <span>Blogs</span>
            </li>
            <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100">
              <Map size={20} />
              <span>Map</span>
            </li>
            <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100">
              <Image size={20} />
              <span>Photos</span>
            </li>
            <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100">
              <Video size={20} />
              <span>Video</span>
            </li>
            <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100">
              <Phone size={20} />
              <span>Contact</span>
            </li>
          </ul>
        </nav>
      </div>
 {/* Overlay */}
 {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 "
          onClick={toggleSidebar}
        ></div>
      )}
      
      <motion.div className="flex flex-row  w-full max-w-md mx-auto bg-transparent  md:hidden absolute top-[40%] left-1/2 -translate-x-1/2 z-50 overflow-hidden"
         initial={{ width: 0 }}
         animate={search ? { width: "100%" } : { width: 0 }}
         transition={{ duration: 0.5 }}
      >
      <input
        type="text"
        placeholder="Search Here..."
        className="flex-grow px-4  text-gray-700 focus:outline-none bg-white  p-4"
      />
      <button className="px-4  bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg ">
        <Search className="size-full " />
      </button>
    </motion.div>
    
    <motion.div className='fixed inset-0 bg-black bg-opacity-75 z-40 md:hidden'
    initial={{ y: "-100%" }}
    animate={search?{ y: 0 }:{ y : "-100%"}}
    transition={{ duration: 0.5 }}
    onClick={() => setSearch(false)}
    >

    </motion.div>

    </div>
  )
}

export default Header