import axios from "axios";
import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
    function handleResponse(response){
        setReady(true)
        setForecastData(response.data.daily)
    }
    let [ready, setReady] = useState(false);
    let [forecastData, setForecastData] = useState();

    function day(){
        let date = new Date (forecastData[1].dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    if (ready) {
    return (
        <div className="box">
            <h3 className="day-forecast">Forecast for the next 4 days:</h3>
            <div className="forecast">
                <div className="row"> 
                    <div className="col-3">
                        <div className = "day">{day()}</div>
                        <WeatherIcon code={forecastData[1].weather[0].icon} size={44}/>
                        <br />
                        <span className="temp-forecast">{Math.round(forecastData[1].temp.max)}° | <span className="min-temp">{Math.round(forecastData[1].temp.min)}°C</span></span>
                    </div>
                    <div className="col-3">
                        <div className = "day">Fri</div>
                        <WeatherIcon code={forecastData[2].weather[0].icon} size={44}/>
                        <br />
                        <span className="temp-forecast">{Math.round(forecastData[2].temp.max)}° | <span className="min-temp">{Math.round(forecastData[2].temp.min)}°C</span></span>
                    </div>
                    <div className="col-3">
                        <div className = "day">Sat</div>
                        <WeatherIcon code={forecastData[3].weather[0].icon} size={44}/>
                        <br />
                        <span className="temp-forecast">{Math.round(forecastData[3].temp.max)}° | <span className="min-temp">{Math.round(forecastData[3].temp.min)}°C</span></span>
                    </div>
                    <div className="col-3">
                        <div className = "day">Sun</div>
                        <WeatherIcon code={forecastData[4].weather[0].icon} size={44}/>
                        <br />
                        <span className="temp-forecast">{Math.round(forecastData[4].temp.max)}° | <span className="min-temp">{Math.round(forecastData[4].temp.min)}°C</span></span>
                    </div>
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