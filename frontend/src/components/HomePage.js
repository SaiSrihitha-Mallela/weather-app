import React, { useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
   const[weatherData, setWeatherData] = useState(null);
   const[city,setCity] = useState(" ");
   const[error,setError] = useState('');

   const apiKey = "939fd19f50f24cd2b6f51858241307";

   const getWeather = async()=>
   {
      try
      {
         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
         setWeatherData(response.data);
         setError(' ');

      }catch (err)
      {
         setError("City not found");
         
      }
   };

   const handleInputChange = (e)=>
   {
      setCity(e.target.value);
   }

   const getWeatherIcon = (condition) => {
      if (condition.includes('cloud')) {
         return 'bi-clouds';
      } else if (condition.includes('sun') || condition.includes('clear')) {
         return 'bi-sun';
      } else if (condition.includes('wind')) {
         return 'bi-wind';
      } else if (condition.includes('rain')) {
         return 'bi-cloud-rain';
      } else {
         return 'bi-question-circle'; // Default icon for unknown conditions
      }
   };

   return (
      <>
         <div className="container custom-container">
            <div className="row">
               <div className="col">
                 <div className="App">
                  <input
                     className="custom-input"
                     type = "text"
                     placeholder="Enter city name"
                     value={city}
                     onChange={handleInputChange}
                  />
                  <div className="search-button" onClick={getWeather}>
                        <i class="bi bi-search"></i>
                  </div>
                     {error && <p className="error">{error}</p>}
                     {weatherData && weatherData.current && weatherData.location && (
                        <div className="weather-info">
                           <div className="row">
                              <div className="col-3">
                                  <h2>{weatherData.location.name}</h2>
                              </div>
                              <div className="col-3">
                                 <i className={`weather-icon ${getWeatherIcon(weatherData.current.condition.text.toLowerCase())}`} />
                              </div>

                           </div>
                           <div className="row ">
                              <p className="custom-temp">{weatherData.current.temp_c} °C</p>
                           </div>
                           <div className="card custom-card">
                              <div className="card-body">
                                 
                                 <p>Weather: {weatherData.current.condition.text}</p>
                                 <p>Humidity: {weatherData.current.humidity} %</p>
                                 <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
                              </div>

                           </div>

                           
                           
                        </div>
                     )}
                 </div>
               </div>
            </div>
         </div>
         
      </>
     
      
   );
};

export default HomePage;
