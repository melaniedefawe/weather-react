import React from "react";

export default function WeatherDetail(props) {
  return (
    <div>
      <h2 className="detail">
        Humidity: <span className="current-detail">{props.humidity}%</span>
      </h2>
      <h2 className="detail">
        Wind: <span className="current-detail">{props.wind} m/s</span>
      </h2>
      <h2 className="detail">
        Rain: <span className="current-detail">{props.rain} mm</span>
      </h2>
    </div>
  );
}
