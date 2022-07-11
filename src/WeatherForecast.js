import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    const apiKey = "7fbc99e26b128af1fc9815e393cfbb4b";
    let lat = props.lat;
    let lon = props.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="box">
            <h3 className="day-forecast">Forecast for the next 4 days:</h3>
            <div className="forecast">
                <div className="row"> 
                    <div className="col-3">
                        <div className = "day">Thu</div>
                        <WeatherIcon code="01d" size={44}/>
                        <br />
                        <span className="temp-forecast">20° | <span className="min-temp">18°C</span></span>
                    </div>
                    <div className="col-3">
                        <div className = "day">Fri</div>
                        <WeatherIcon code="02d" size={44}/>
                        <br />
                        <span className="temp-forecast">15° | <span className="min-temp">6°C</span></span>
                    </div>
                    <div className="col-3">
                        <div className = "day">Sat</div>
                        <WeatherIcon code="04d" size={44}/>
                        <br />
                        <span className="temp-forecast">22° | <span className="min-temp">19°C</span></span>
                    </div>
                    <div className="col-3">
                        <div className = "day">Sun</div>
                        <WeatherIcon code="09d" size={44}/>
                        <br />
                        <span className="temp-forecast">16° | <span className="min-temp">12°C</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}