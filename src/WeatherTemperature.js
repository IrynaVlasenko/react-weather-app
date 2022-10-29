import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenfeit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="wetherUnits">
        <span>{Math.round(props.celsius)}</span>
        <span className="degrees">
          <a href="/" className="active">
            °C
          </a>
          | {""}
          <a href="/" onClick={showFahrenfeit}>
            °F
          </a>
        </span>
        <br />
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round(fahrenheit())}</span>
        <span className="degrees">
          <a href="/" className="active" onClick={showCelsius}>
            °C
          </a>
          {""}|<a href="/">°F</a>
        </span>
        <br />
      </div>
    );
  }
}
