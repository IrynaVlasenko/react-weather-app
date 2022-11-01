import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function temperatureDay() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="row">
      <div className="col">{day()}</div>
      <div className="col">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div className="col">{Math.round(temperatureDay())}°C</div>
    </div>
  );
}
