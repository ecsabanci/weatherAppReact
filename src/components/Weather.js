import { useState } from "react";
import { useWeather } from "../context/WeatherContext";

const Weather = () => {
  const { location, setLocation, response } = useWeather();

  const contents = {
    city: response && response.data.name,
    icon: response && response.data.weather[0].icon,
    max_temp: response && Math.round(response.data.main.temp_max) - 273,
    min_temp: response && Math.round(response.data.main.temp_min) - 273,
    description: response && response.data.weather[0].description
  };

  return (
    <div>
      <div className="cityName text-left p-3 w-100">
        {/* <span className="my-2">{response && contents.city}</span> */}

        <select
          className="citySelect"
          onChange={(e) => setLocation({ name: e.target.value })}
          name=""
          id=""
        >
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
          <option value="Antalya">Antalya</option>
          <option value="Adıyaman">Adıyaman</option>
          <option value="Rize">Rize</option>
        </select>
      </div>
      <div className="row align-items-center justify-content-center">
        <div
          className={`card w-25 m-3 col-3 ${
            contents.max_temp > 25 ? "hotWeather" : "coldWeather"
          }`}
        >
          <div className="card-body">
            {
              <img
                src={`http://openweathermap.org/img/wn/${contents.icon}@2x.png`}
                alt=""
              />
            }
            <span className="temperatures w-100 d-flex align-items-center justify-content-center">
              <p className="mx-1"> {contents.max_temp}C </p>
              <p className="minTemp mx-1"> {contents.min_temp}C </p>
            </span>

            <aside className="w-100">
              <p className="description">{contents.description}</p>
            </aside>
          </div>
        </div>
        <div
          className={`card w-25 m-3 col-3 ${
            contents.max_temp > 25 ? "hotWeather" : "coldWeather"
          }`}
        >
          <div className="card-body">
            {
              <img
                src={`http://openweathermap.org/img/wn/${contents.icon}@2x.png`}
                alt=""
              />
            }
            <span className="temperatures w-100 d-flex align-items-center justify-content-center">
              <p className="mx-1"> {contents.max_temp}C </p>
              <p className="minTemp mx-1"> {contents.min_temp}C </p>
            </span>

            <aside className="w-100">
              <p className="description">{contents.description}</p>
            </aside>
          </div>
        </div>
        <div
          className={`card w-25 m-3 col-3 ${
            contents.max_temp > 25 ? "hotWeather" : "coldWeather"
          }`}
        >
          <div className="card-body">
            {
              <img
                src={`http://openweathermap.org/img/wn/${contents.icon}@2x.png`}
                alt=""
              />
            }
            <span className="temperatures w-100 d-flex align-items-center justify-content-center">
              <p className="mx-1"> {contents.max_temp}C </p>
              <p className="minTemp mx-1"> {contents.min_temp}C </p>
            </span>

            <aside className="w-100">
              <p className="description">{contents.description}</p>
            </aside>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Weather;
