import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./WeatherForecast.js";
import axios from"axios";
import "./App.css"

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData ({
           ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      precipitation: response.data.main.precipitation,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name, 
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey="616cd13531829d29dc851eac29d80546";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
    }
}