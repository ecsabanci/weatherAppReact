import "./style.css";
import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";

export default function App() {
  return (
    <div className="App h-screen bg-purple-50">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}
