import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      //   coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      //   date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "fb4ad69a2bb4c6370849b9a18c3de8e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2>{weatherData.city}</h2>
              <WeatherTemperature celsius={weatherData.temperature} />

              <WeatherIcon code={weatherData.icon} />

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
                <button type="button" className="btn btn-primary">
                  {" "}
                  Search
                </button>
              </form>
              <p className="float-left">Last updated:</p>
              <div>
                <FormatedDate date={weatherData.date} className="day" />
              </div>

              <p className="text-capitalize">{weatherData.description}</p>
              <p>
                Humidity <span>{weatherData.humidity}</span>%{" "}
              </p>
              <p>
                Wind <span>{weatherData.wind}</span>km/h{" "}
              </p>
            </div>
          </div>
          <footer>
            This project was coded by Iryna Vlasenko and is {""}
            <a href="https://github.com/IrynaVlasenko/react-weather-app">
              open-sourced on GitHub
            </a>{" "}
            and <a href="https://cute-fudge-16b339.netlify.app/">Netlify</a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
