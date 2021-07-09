import { useState } from "react";
import { useWeather } from "../context/WeatherContext";
import cities from '../cities.json';


const Weather = () => {
  const { setLocation, response } = useWeather();

  const contents = {
    city: response && response.data.name,
    icon: response && response.data.weather[0].icon,
    max_temp: response && Math.round(response.data.main.temp_max) - 273,
    min_temp: response && Math.round(response.data.main.temp_min) - 273,
    description: response && response.data.weather[0].description
  };


  return ( 
    <div className={`h-screen w-screen flex flex-col items-center justify-center ${
            contents.max_temp > 25 ? "bg-red-400" : "bg-blue-300"
          }`}>

    <div className={`rounded-xl hover:${contents.max_temp > 25 ? "bg-red-700" : "bg-blue-400"} transform motion-safe:hover:scale-105 duration-1000 border-2 border-gray-300 border-opacity-50 p-7`}>
      <div className=" p-3 w-100">

        <select
          className="p-2 rounded-xl font-bold hover: focus:outline-none"
          onChange={(e) => setLocation({ name: e.target.value })}
          name=""
          id=""
        >
          {
            cities.map((city,index) => (
              <option key={index} value={city.name}> {city.name} </option>
            ))
          }
        </select>
      </div>
      <div className="">
        <div
          // className={`card w-25 m-3 col-3 ${
          //   contents.max_temp > 25 ? "bg-red-300" : "bg-blue-300"
          // }`}
        >
          <div className="card-body grid place-items-center ">
            {
              <img
                src={`http://openweathermap.org/img/wn/${contents.icon}@2x.png`}
                alt=""
              />
            }
            <span className="flex justify-center gap-3">
              <p className="font-medium"> {contents.max_temp}C </p>
              <p className="font-medium"> {contents.min_temp}C </p>
            </span>

            <aside className="w-100">
              <p className="font-medium text-opacity-25">{contents.description}</p>
            </aside>
          </div>
        </div>
      </div>
     
    </div>

     <br />
    </div>
  );
};

export default Weather;
