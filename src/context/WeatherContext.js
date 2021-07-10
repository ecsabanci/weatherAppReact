import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState({ name: "Adana" });
  const [response, setResponse] = useState("");

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.name}&appid=c12cd420fd24effa0b81b33c545c0f3a`
    )
      .then((response) => {
        setResponse(response);
        // console.log("response", response.data);
      })
      .catch((err) => console.log(err));
  }, [location]);

  // axios("../cities.json").then((response) => console.log(response));

  const values = {
    location,
    setLocation,
    response,
    setResponse,
  };

  return (
    <WeatherContext.Provider value={values}>
      {" "}
      {children}{" "}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
