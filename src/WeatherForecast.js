import React, { useState , useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props){
    let [loaded, setLoad] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoad(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoad (true);

}

function load() {
}

if(loaded) {
  return (
    <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
  }
          })}
              </div>
      </div>
    );

            } else {
              let apiKey = "616cd13531829d29dc851eac29d80546";
              let longitude = props.coordinates.lon;
              let latitude = props.coordinates.lat;
              let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
              
              axios.get(apiUrl).then(handleResponse);

              return null;
        
    
  } 
}
