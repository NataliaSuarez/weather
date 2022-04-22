import { useQuery } from 'react-query';

export const useWeather = (city: string | null) => useQuery(['weather', city], async () => {
	if (!city) return;
  return fetch(`http://api.weatherapi.com/v1/current.json?key=c892299c45c347eb9cb03006222104&q=${city}&aqi=no`).then(res =>
    res.json()
  )
});