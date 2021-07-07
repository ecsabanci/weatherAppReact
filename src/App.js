import "./styles.css";
import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";

export default function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}
