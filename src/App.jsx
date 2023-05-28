import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({
    name:'Search Location',
  
    
  });
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=670479f4336a8d1f7f2f80f3cc7adedd`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
              {data.main ?<h1>{data.main.temp.toFixed(2)}°C</h1> :null}
          </div>
          <div className="description">
           {data.weather ?<p>{data.weather[0].main}</p> :null}
           {data.weather ?<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> :null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} km/h</p> : null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
