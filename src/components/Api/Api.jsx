import axios from 'axios';

const URL = 'https://api.weatherapi.com/v1/current.json';

const ApiKey = '9bff6b31a3b54c04b5d111556240308';

const ApiUrl = `${URL}?key=${ApiKey}`;

const FetchApi = async (cityName) => {
  try {
    let response = await axios.get(`${ApiUrl}&q=${cityName}`); 
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Fetching data error:', error);
    throw error; 
  }
}

export default FetchApi;
