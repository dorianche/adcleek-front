import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [citiesData, setCitiesData] = useState({});
  const [forecast, setForecast] = useState({});
  const baseURL = "http://localhost:8080";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCitiesData(response.data);
    });
  }, []);

  const ListCities = () => {
    return (
      <div className="container">
        {citiesData.map((city) => (
          <div id={city.insee} className="row" onClick={findCity}>
            <div className="col-sm">{city.insee}</div>
            <div className="col-sm">{city.name}</div>
            <div className="col-sm">{city.pop}</div>
          </div>
        ))}
      </div>
    );
  };

  const findCity = (e) => {
    const value = e.target.id;

    axios.get(`${baseURL}/${value}`).then((response) => {
      setForecast(response.data);
    });
  };

  const cityForecast = (forecast) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div>Probabilité de pluie: {forecast.probarain}</div>
            <div>{forecast.tmin}</div>
            <div>{forecast.tmax}</div>
          </div>
          <div className="col-md">
            <div>Probabilité de pluie: {forecast.probarain}</div>
            <div>{forecast.tmin}</div>
            <div>{forecast.tmax}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div>Probabilité de pluie: {forecast.probarain}</div>
            <div>{forecast.tmin}</div>
            <div>{forecast.tmax}</div>
          </div>
          <div className="col-md">
            <div>Probabilité de pluie: {forecast.probarain}</div>
            <div>{forecast.tmin}</div>
            <div>{forecast.tmax}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Meteo</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <ListCities />
          </div>
          <div className="col-sm">{forecast && <cityForecast />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
