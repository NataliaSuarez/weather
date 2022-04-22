import Autocomplete from '@mui/material/Autocomplete';

import CssTextField from './CustomTextField';
import { useCountries } from '../api/countries';

type CountrySelectProps = {
  handleChange: any;
}

const CountrySelect = ({ handleChange }: CountrySelectProps) => {
  const { isLoading, error, data } = useCountries();

  if (isLoading || error) return (<CssTextField
    disabled
    label="Country"
    sx={{ width: '-webkit-fill-available', padding: '12px' }}
    InputLabelProps={{
      sx: { padding: '12px' }
    }}
  />)

  const countryOptions = Object.entries(data.countries).map(([key, countryName]) => ({
    label: countryName,
    key,
  }));

  const handleChangeCountry = (event: any, value: any, reason: string) => {
    if (reason === 'selectOption') handleChange(value);
    if (reason === 'clear' || reason === 'removeOption') handleChange({ value: '', key: 'AR' });
  }

  return (
    <Autocomplete
      freeSolo
      disablePortal
      options={countryOptions}
      sx={{ width: '-webkit-fill-available', padding: '12px' }}
      renderInput={(params) => <CssTextField {...params} label="Country" />}
      onChange={handleChangeCountry}
    />
  );
}

export default CountrySelect;