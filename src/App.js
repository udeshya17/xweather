import './App.css';
import Card from './components/Card/Card';
import { useState } from 'react';
import FetchApi from './components/Api/Api';

function App() {
  const [cityName, setCityName] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [condition, setCondition] = useState('');
  const [windSpeed, setWindSpeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [dataFetched, setDataFetched] = useState(false); 

  const handleInput = (e) => {
    setCityName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName) {
      getData(cityName);
    }
  }

  const getData = async (cityName) => {
    setLoading(true);
    setHasError(false);
    try {
      let response = await FetchApi(cityName);
      if (response) {
        setTemperature(response.current.temp_c);
        setHumidity(response.current.humidity);
        setCondition(response.current.condition.text);
        setWindSpeed(response.current.wind_kph);
        setDataFetched(true); 
      } else {
        setHasError(true);
        alert('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasError(true);
      alert('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className='home'>
        <form className='form' onSubmit={handleSubmit}>
          <input 
            type='text'
            className='input' 
            placeholder='Enter city name' 
            value={cityName}
            onChange={handleInput}
          />
          <button className='button' type='submit'>Search</button>
        </form>
      </div>
      {loading && <p style={{textAlign:'center'}}>Loading data...</p>}
      {dataFetched && !loading && !hasError && (
        <div className='weather-cards'>
          <Card heading={"Temperature"} weatherData={`${temperature}°C`} />
          <Card heading={"Humidity"} weatherData={`${humidity}%`} />
          <Card heading={"Condition"} weatherData={condition} />
          <Card heading={"Wind Speed"} weatherData={`${windSpeed} kph`} />
        </div>
      )}
    </div>
  );
}

export default App;
