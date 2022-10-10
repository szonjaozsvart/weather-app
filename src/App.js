import "./App.css";
import HeaderButtons from "./components/HeaderButtons";
import HeaderInputs from "./components/HeaderInputs";
import CurrTimeAndLocation from "./components/CurrTimeAndLocation";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-8 py-8 px-40 bg-gradient-to-br from-cyan-600 to-blue-800 h-fit shadow-xl shadow-gray-700">
      <HeaderButtons />
      <HeaderInputs />
      <CurrTimeAndLocation/>
    </div>
  );
}

export default App;
