import { useWeather } from "../context/WeatherContext";

const Weather = () => {
  const { location, setLocation, response } = useWeather();

  const changeCity = () => {
    if (location.name === "Ankara") {
      setLocation({ name: "Istanbul" });
    }
    setLocation({ name: "Ankara" });
  };

  return (
    <div>
      <h2>Weather</h2>
      location - {location.name} <br />
      temp min - {response &&
        Math.round(response.data.main.temp_min) - 273}{" "}
      <br />
      temp max - {response &&
        Math.round(response.data.main.temp_max) - 273}{" "}
      <br />
      description - {response && response.data.weather[0].description} <br />
      <button onClick={changeCity}>Change</button>
      <div></div>
    </div>
  );
};

export default Weather;
