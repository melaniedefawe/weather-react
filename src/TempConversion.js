import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <h1 className="temperature">{Math.round(props.celsius)} </h1>
        <span className="celsius active" rel="noreferrer">
          °C
        </span>
        <span className="separator"> | </span>
        <a
          href="/"
          className="fahrenheit"
          rel="noreferrer"
          onClick={convertToFahrenheit}
        >
          °F
        </a>
        <p className="description">{props.description}</p>
        <p className="felt-temperature">
          Feels like {Math.round(props.felt)}°C
        </p>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let feltfahrenheit = (props.felt * 9) / 5 + 32;

    return (
      <span>
        <h1 className="temperature">{Math.round(fahrenheit)} </h1>
        <a
          href="/"
          className="fahrenheit"
          rel="noreferrer"
          onClick={convertToCelsius}
        >
          °C
        </a>
        <span className="separator"> | </span>
        <span className="fahrenheit active">°F</span>
        <p className="description">{props.description}</p>
        <p className="felt-temperature">
          Feels like {Math.round(feltfahrenheit)}°C
        </p>
      </span>
    );
  }
}
