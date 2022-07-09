import React from "react";
import CityDate from "./CityDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

export default function CurrentWeather(props) {
  return (
    <div className="row">
      <div className="col-7">
        <CityDate city={props.data.city} date={props.data.date} />
        <br />
        <div>
          <h2 className="detail">
            Humidity:{" "}
            <span className="current-detail">{props.data.humidity}%</span>
          </h2>
          <h2 className="detail">
            Wind: <span className="current-detail">{props.data.wind} m/s</span>
          </h2>
        </div>
      </div>
      <div className="col-4 small-box">
        <div className="current">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <br />
          <TempConversion
            celsius={props.data.temperature}
            description={props.data.description}
            felt={props.data.felt}
          />
        </div>
      </div>
    </div>
  );
}
