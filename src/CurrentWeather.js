import React from "react";
import WeatherDetail from "./WeatherDetail";
import CityDate from "./CityDate";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-7">
        <CityDate city={props.data.city} date={props.data.date} />
        <br />
        <WeatherDetail
          humidity={props.data.humidity}
          wind={props.data.wind}
          rain={0}
        />
      </div>
      <div className="col-4 small-box">
        <div className="current">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <br />
          <h1 className="temperature">{Math.round(props.data.temperature)} </h1>
          <a href="/" className="celsius active" rel="noreferrer">
            °C
          </a>
          <span className="separator"> | </span>
          <a href="/" className="fahrenheit" rel="noreferrer">
            °F
          </a>
          <p className="description">{props.data.description}</p>
          <p className="felt-temperature">
            Feels like {Math.round(props.data.felt)}°C
          </p>
        </div>
      </div>
    </div>
  );
}
