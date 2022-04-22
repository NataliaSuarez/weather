import { useQuery } from 'react-query';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
    'X-RapidAPI-Key': '5c1b42bfcdmsh059fc45b08c2c34p1878c9jsn3709c2d0b161'
  }
};

export const useCountries = () => useQuery(['countries'], async () =>
  fetch('https://countries-cities.p.rapidapi.com/location/country/list', options).then(res =>
    res.json()
  ));
