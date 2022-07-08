import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Search from "./Search";
import CityDate from "./CityDate";
import WeatherDetail from "./WeatherDetail";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      felt: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            <Search />
            <div className="row">
              <div className="col-7">
                <CityDate
                  city={weatherData.city}
                  day="Wednesday"
                  hour="11:10"
                />
                <br />
                <WeatherDetail
                  humidity={weatherData.humidity}
                  wind={weatherData.wind}
                  rain={0}
                />
              </div>
              <div class="col-4 small-box">
                <div className="current">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                    alt={weatherData.description}
                  />
                  <br />
                  <h1 className="temperature">
                    {Math.round(weatherData.temperature)}{" "}
                  </h1>
                  <a href="/" className="celsius active" rel="noreferrer">
                    °C
                  </a>
                  <span className="separator"> | </span>
                  <a href="/" className="fahrenheit" rel="noreferrer">
                    °F
                  </a>
                  <p className="description">{weatherData.description}</p>
                  <p className="felt-temperature">
                    Feels like {Math.round(weatherData.felt)}°C
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/valhalyria/weather-react"
            target="blank"
            rel="noreferrer"
          >
            Open-source code by Melanie Defawe
          </a>
        </div>
      </div>
    );
  } else {
    const apiKey = "7fbc99e26b128af1fc9815e393cfbb4b";
    let city = "Berlin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
