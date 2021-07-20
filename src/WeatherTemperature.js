import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const[unit, setUnit] = useState("Fahrenheit");
  function showFahrenheit(event){
    setUnit("celsius");
  }

  function showCelsius(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === 'fahrenheit') {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.imperial)}</span>
      <span className="unit">°F | {" "}
      <a  href="/" onclick={showCelsius}>°C</a></span>
    </div>
  );
} else {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.metric)}
      </span>
      <a  href="/" onclick={showFahrenheit}>°F </a> | {" "}
      °C
    </div>
  );
  }
}
