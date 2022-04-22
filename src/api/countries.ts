import { useQuery } from 'react-query';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_LOCATION || '',
  }
};

export const useCountries = () => useQuery(['countries'], async () =>
  fetch('https://countries-cities.p.rapidapi.com/location/country/list', options).then(res =>
    res.json()
  ));
