import React from "react";

export default function CityDate(props) {
  return (
    <div>
      <h1 className="city">{props.city}</h1>
      <div className="date">
        Last updated: {props.day}, {props.hour}
      </div>
    </div>
  );
}
