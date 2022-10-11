import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Details() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-white">
        <p>Sunny</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"/>
        
        <p className="text-5xl">20°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={20} className="ml-1" />
            Really feel:
            <span className="font-medium ml-1">18°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={20} className="ml-1" />
            Humidity:
            <span className="font-medium ml-1">27 %</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={20} className="ml-1" />
            Wind:
            <span className="font-medium ml-1">8 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun size={20} className="ml-1"/>
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">06:42AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset size={20} className="ml-1"/>
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">06:23PM</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp size={20} className="ml-1"/>
        <p className="font-light">
          High:
          <span className="font-medium ml-1">22°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown size={20} className="ml-1"/>
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">9°</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
