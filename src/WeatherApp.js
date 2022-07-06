import React from "react";
import axios from "axios";
import "./styles.css";
import Search from "./Search";
import CityDate from "./CityDate";
import WeatherDetail from "./WeatherDetail";

export default function WeatherApp() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Search />
          <div className="row">
            <div className="col-7">
              <CityDate city="Berlin" day="Wednesday" hour="11:10" />
              <br />
              <WeatherDetail humidity={10} wind={6} rain={0} />
            </div>
            <div class="col-4 small-box">
              <div className="current">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt=""
                  id="icon"
                />
                <br />
                <h1 className="temperature">8 </h1>
                <a href="#" className="celsius active">
                  °C
                </a>
                <span className="separator"> | </span>
                <a href="#" className="fahrenheit">
                  °F
                </a>
                <p className="description">Clear</p>
                <p className="felt-temperature">Feels like 11°C</p>
              </div>
            </div>
          </div>
        </div>
        <a href="https://github.com/valhalyria/my-weather-app" target="blank">
          Open-source code by Melanie Defawe
        </a>
      </div>
    </div>
  );
}
