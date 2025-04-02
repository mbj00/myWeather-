import { useState } from 'react'
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { API_KEY } from './constants';
// import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();
  const [error, setError] = useState(null);
  // let date = new Date();
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const API_KEY = `485a187ce93fdb77b2e26bd2f8e1323c`;
  const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=${API_KEY}`

  const fetchWeather = async () => {
    if (city) {
      const response = await axios.get(API_URL)
      if (response) {
        console.log("data fetched")
        console.log(response.data)
        setWeather(response.data)
      } else (
        alert("data not fetched")
      )
    } else
      alert("enter city")
  }

  return (
    <>
      <Navbar />

      <div className="h-auto bg-[url('/assets/banner.jpg')] w-full bg-cover bg-top">
        <div className="h-72 bg-black opacity-80 contrast-200">
          <div className='h-72 flex justify-center items-center '>
            <input type="text" placeholder="Search a city..." value={city} name="cityName" id="cityName" onChange={(e) => { setCity(e.target.value) }}
              className="text-xl p-2 border-gray-500 rounded-md w-5/12" />
            <button onClick={fetchWeather} className="text-white hover:text-blue-500 text-2xl bg-blue-900 rounded-md p-3 m-2">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="h-[32rem] ">
          <div className=' flex items-center bg-black opacity-85'>
            <FaLocationDot className='text-2xl text-white m-2' />
            <p className='text-3xl text-white font-bold text-left m-2 capitalize'>{weather && weather.city.name}</p>
          </div>

          <div className='h-full w-full flex items-center justify-center'>
            <div className='overflow-auto w-4/6 h-4/6 bg-white mx-auto rounded-lg opacity-70 border-blue-900 border-[1px] '>
              <div className='m-2 border-gray-500 border-b-[1px] '>
                <ul className='grid grid-cols-5 px-3 text-center font-bold m-1'>
                  <li>Day</li>
                  <li>Temprature</li>
                  <li>Weather</li>
                  <li>Humidity</li>
                  <li>Wind</li>
                </ul>
              </div>
              <div>
                {weather && (
                  <div>
                    <ul className='flex flex-col px-3 m-1'>
                      {weather.list.slice(0, 30).map((item, index) => {
                        const date = new Date(item.dt_txt);

                        // Format: "dd/mm"
                        const formattedDate = date.toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit'
                        });

                        // Format: "Mon", "Tue", etc.
                        const day = date.toLocaleDateString('en-US', { weekday: 'short' });

                        // Format: "HH:HH"
                        const time = date.toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: false // 24-hour format
                        });


                        return (
                          <li key={index} className={`grid grid-cols-5 text-center p-1 ${index % 2 === 0 ? 'bg-blue-200' : 'bg-transparent'}`}>
                            {/* {date = item.dt_txt} */}
                            <p><span className='font-semibold'>{formattedDate}</span>, {day}, {time} </p>
                            <p>{Math.round(item.main.temp) - 273}°C</p>
                            <p className='capitalize'>{item.weather[0].description}</p>
                            <p>{item.main.humidity}</p>
                            <p>{item.wind.speed}</p>
                          </li>
                        )
                      }

                      )}
                    </ul>
                  </div>

                )}
              </div>
            </div>
          </div>

        </div>
      </div>




      {/* <input type="text" value={city} name="cityName" id="cityName" placeholder='Enter city...' onChange={(e) => { setCity(e.target.value) }} /> */}
      {/* <button onClick={fetchWeather}>Search</button> */}

      {/* {weather && (
        <div>
          <h3>{weather.city.name}, {weather.city.country}</h3>
          <ul>
            {weather.list.slice(0, 5).map((item, index) => (
              <li key={index}>
                <p>{item.dt_txt}</p>
                <p>Temperature: {item.main.temp}°C</p>
                <p>Weather: {item.weather[0].description}</p>
              </li>
            ))}
          </ul>
        </div>

      )} */}

      <Footer />

    </>
  )
}

export default App
