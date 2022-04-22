import { useQuery } from 'react-query';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_LOCATION || '',
	}
};

export const useCities = (countryCode: string) => useQuery(['cities', countryCode], async () =>
  fetch(`https://countries-cities.p.rapidapi.com/location/country/${countryCode}/city/list?page=1&per_page=10&format=json&population=500000`, options).then(res =>
    res.json()
  ));