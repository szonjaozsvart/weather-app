import "./App.css";
import HeaderButtons from "./components/HeaderButtons";
import HeaderInputs from "./components/HeaderInputs";
import CurrTimeAndLocation from "./components/CurrTimeAndLocation";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import getFormattedData from "./services/weatherService";

function App() {
  const fetchWeather = async() => {
    const data = await getFormattedData({q:'dublin'});
    console.log(data)
  }
  fetchWeather()

  return (
    <div className="mx-auto max-w-screen-md mt-8 py-8 px-40 bg-gradient-to-br from-cyan-600 to-blue-800 h-fit shadow-xl shadow-gray-700">
      <HeaderButtons />
      <HeaderInputs />
      <CurrTimeAndLocation/>
      <Details/>
      <Forecast title="Hourly forecast"/>
      <Forecast title="Daily forecast"/>
    </div>
  );
}

export default App;
