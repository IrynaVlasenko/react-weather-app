import React from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const apiKey = "fb4ad69a2bb4c6370849b9a18c3de8e4";
  let city = "Detroit";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2>TEXAS</h2>
            <h1>
              <span></span>
              <span className="degrees">
                <a href="/" className="active">
                  19°C
                </a>
                |<a href="/">33°F</a>
              </span>
              <br />
              <img
                src="https://cdn.icon-icons.com/icons2/2505/PNG/512/sun_weather_icon_150657.png"
                alt=""
              ></img>
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
              Last updated:<span>Saturday</span>
            </p>
            <p>Snowing</p>
            <p>
              Humidity <span>77</span>%{" "}
            </p>
            <p>
              Wind <span>30</span>km/h{" "}
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
}
