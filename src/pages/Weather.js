import React , {useState, useEffect} from 'react';
import axios from 'axios';
 

const API_KEY = '9f04332faa794991931193201232203';

function Weather() {
    
    const [city, setCity] = useState('Erevan');
    const [weather, setWeather] = useState(null);
    
  
    useEffect(() => {
      async function fetchWeather() {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        const data = response.data.current;
        setWeather(data);
      }
  
      fetchWeather();
    }, [city]);
  
    const handleCityChange = (event) => {
      setCity(event.target.value);
    }
  
    if (!weather) {
      return <div>Loading...</div>;
    }
  
    const weatherIcon = weather.condition.icon;
    let icon;
  
    if (weatherIcon.includes('sun')) {
      icon = '☀️';
    } else if (weatherIcon.includes('rain')) {
      icon = '🌧️';
    } else if (weatherIcon.includes('cloud')) {
      icon = '☁️';
    } else {
      icon = '🌤️';
    }
  
    return (
      <div className='container0'>
      <div className="container9">
        <div className="left1">
          <div className="temp">{weather.temp_c}°C {icon}</div>
          <div>
            <div className="text1">{weather.condition.text}</div>
          </div>
        </div>
        <div className="right1">
        <div>Precipitation probability: {weather.precip_mm} mm ({weather.precip_in} in)</div>
        <div>Humidity: {weather.humidity}%</div>
        <div>Wind: {weather.wind_kph} km/h ({weather.wind_mph} mph)</div>
        </div>
        <div className="input-container1">
          <p>Please write your city</p>
          <input className="input1" type="text" value={city} onChange={handleCityChange} />
        </div>
      </div>
      <p className='p1'>Наш веб-сайт предоставляет актуальную информацию о погоде для любого города в мире. 
        Мы собираем данные из надежных источников, чтобы обеспечить точность и надежность прогнозов. 
        С нашим сайтом вы можете узнать текущую температуру, погодные условия, вероятность осадков, 
        влажность и скорость ветра для выбранного города. Наш сайт удобен в использовании, что позволяет 
        получать информацию о погоде в любое время и в любом месте. Независимо от того, нужна вам информация 
        о погоде для планирования отпуска или путешествия, наш сайт готов помочь вам принимать осознанные решения.</p>
      
      <p className='p1'>Our website provides up-to-date weather information for any city in the world. We 
        gather data from reliable sources to ensure accuracy and reliability of forecasts. 
        With our website, you can find out the current temperature, weather conditions, 
        precipitation probability, humidity, and wind speed for your selected city. 
        Our website is user-friendly, allowing you to access weather information anytime and 
        anywhere. Whether you need to know the weather for planning your vacation or for traveling, 
        our website is ready to help you make informed decisions.</p>
      </div>
    );
}  

export default Weather;