import axios from "axios";
import React, {useState, useEffect} from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
  function handleResponse(response){
        setReady(true)
        setForecastData(response.data.daily)
    }
    let [ready, setReady] = useState(false);
    let [forecastData, setForecastData] = useState();
    
    useEffect (() => {
      setReady(false);
    }, [props.lat, props.lon]);


    if (ready) {
    return (
        <div className="box">
            <h3 className="day-forecast">Forecast for the next 4 days:</h3>
            <div className="forecast">
                <div className="row"> 
                  {forecastData.map(function(dailyForecast,index) {
                     function day(){
                        let date = new Date (dailyForecast.dt * 1000);
                        let day = date.getDay();
                        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        return days[day];
                     }

                     if (index >0 && index <=4) {
                        return (
                           <div className="col-3" key={index}>
                              <div className = "day">{day()}</div>
                              <WeatherIcon code={dailyForecast.weather[0].icon} size={44}/><br />
                              <span className="temp-forecast">{Math.round(dailyForecast.temp.max)}° | <span className="min-temp">{Math.round(dailyForecast.temp.min)}°C</span></span>
                           </div>
                           );
                      } else {
                        return null
                      }
                  })}
                </div>
            </div>
        </div>
    );
} else {
    const apiKey = "7fbc99e26b128af1fc9815e393cfbb4b";
    let lat = props.lat;
    let lon = props.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}
}