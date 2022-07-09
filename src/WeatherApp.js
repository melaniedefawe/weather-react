import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState("");

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      felt: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      ready: true,
    });
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "7fbc99e26b128af1fc9815e393cfbb4b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-7">
                  <input
                    type="text"
                    placeholder="Type a city..."
                    className="searchbar"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-4">
                  <input
                    type="submit"
                    value="Search"
                    className="search-button"
                  />
                </div>
              </div>
            </form>
            <CurrentWeather data={weatherData} />
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
    let defaultCity = "Berlin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
