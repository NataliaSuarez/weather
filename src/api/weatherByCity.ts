import { useQuery } from 'react-query';

export const useWeather = (city: string | null) => useQuery(['weather', city], async () => {
	if (!city) return;

  return fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY_WEATHER}&q=${city}&aqi=no`).then(res =>
    res.json()
  )
});