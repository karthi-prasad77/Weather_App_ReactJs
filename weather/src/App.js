import React, {useState, useEffect} from 'react';
//import './App.css';
import axios from 'axios';

const api = {
  key : "e4f1aecb2f8eab10a5aab08935f17af9",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {

  // create two useStates to get the data and the location includes latitude and longitude
  const[data, setData] = useState({});
  // const[lat, setLat] = useState([]);
  // const[long, setLong] = useState([]);
  const[location, setLocation] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });
  //   }
  //     const search = evt => {
  //     await fetch(`${process.env.REACT_APP_API_URL}/weather/?location=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setData(result)
  //       setLocation('');
  //       console.log(result);
  //     });
  //   }
  
  //   fetchData();
  // }, [lat,long])

  const searchLocation = evt => {
    // check condition
    if(evt.key === "Enter")
    {
      //fetch(`${process.env.REACT_APP_API_URL}/weather/?location=${location}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        setLocation('');
        console.log(result);
    });
  }
}
    

  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // }


  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;