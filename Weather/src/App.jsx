import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weathernow from './Weather';
import { useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import CurrentWeather from './Components/CurrentWeather';
import Highlights from './Components/TodaysHighlights'
import Othercities from './Components/Othercities'
export const loc = createContext();
export const currentweather = createContext();
export const weeklyforecast = createContext();
function App() {
  const[location,setLocation] = useState({lat:'',long:''});
  const [userLocation,setUserLocation] = useState({country:'',city:''});
  const [currentWeather,setCurrentWeather] = useState('');
  const [forecast,setForecast] = useState('');
  useEffect(() =>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) =>{
      const {latitude,longitude} = position.coords;
      setLocation({lat:latitude,long:longitude});
      console.log('Latitude:', latitude, 'Longitude:', longitude);
    }, (err) => {
      console.error("Error fetching location:", err.message); // Handle errors
    });
  }
},[]
)
useEffect(() => {
  if (location.lat && location.long) {
  axios.get(`http://localhost:8000/data/location?lat=${location.lat}&long=${location.long}`).then((response) => {
    const countryName = response.data.features[0].properties.country;
    const cityName = response.data.features[0].properties.city;
  setUserLocation({country:countryName,city:cityName});
  }).catch((error) => {console.log(error.message)})
  }},[location]
  );
 useEffect(() => {
  if (location.lat && location.long) {
  axios.get(`http://localhost:8000/data/currentweather?lat=${location.lat}&long=${location.long}`).then((response) => {
    console.log(response.data);
    setCurrentWeather(response.data);
  }).catch((error) => {
    console.log(error.message);
  })
 }},[location] );

 useEffect(() => {
  if (location.lat && location.long) {
  axios.get(`http://localhost:8000/data/weeklyforecast?lat=${location.lat}&long=${location.long}`).then((response) => {
    console.log(response.data);
    setForecast(response.data);
  }).catch((error) => {
    console.log(error.message);
  })
 }},[location] );
 
 
  return (
    <weeklyforecast.Provider value={forecast}>
    <loc.Provider value = {userLocation}>
      <currentweather.Provider value={currentWeather}>
    <div >
      <Header />   
      <div className='lg:grid lg:grid-cols-3 '>
        <div className='lg:col-span-2'>
          <CurrentWeather />
          <Highlights />
        </div>
      <div className='lg:col-span-1'>
      <Othercities />
      </div>
      </div>
      
    </div>
    </currentweather.Provider>
    </loc.Provider>
    </weeklyforecast.Provider>
  );
}

export default App;
