import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import FormatedDate from "./FormatedDate";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      //   coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      //   date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: "https://cdn.icon-icons.com/icons2/2505/PNG/512/sun_weather_icon_150657.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2>{weatherData.city}</h2>
              <h1>
                <span>{Math.round(weatherData.temperature)}</span>
                <span className="degrees">
                  <a href="/" className="active">
                    °C
                  </a>
                  |<a href="/">33°F</a>
                </span>
                <br />
                <img src={weatherData.icon} alt=""></img>
              </h1>
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  autoComplete="off"
                />
                <button type="button" className="btn btn-primary">
                  {" "}
                  Search
                </button>
              </form>
              <p>
                Last updated:
                <span>
                  <FormatedDate date={weatherData.date} />
                </span>
              </p>
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
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    const apiKey = "fb4ad69a2bb4c6370849b9a18c3de8e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
