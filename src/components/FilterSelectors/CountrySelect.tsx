import Autocomplete from '@mui/material/Autocomplete';

import CssTextField from './CustomTextField';
import { useCountries } from '../../api/countries';

interface HandleChangeFn {
  (value: any): void;
}

type CountrySelectProps = {
  handleChange: HandleChangeFn;
}

const CountrySelect = ({ handleChange }: CountrySelectProps) => {
  const { isLoading, error, data } = useCountries();

  const countriesDisabled = isLoading || error || !data.countries || data.countries?.length === 0;

  if (countriesDisabled) return (<CssTextField
    disabled
    helperText="There are no options at this time"
    label="Country"
    sx={{
      width: '-webkit-fill-available', padding: '12px', height: '80px'
    }}
    InputLabelProps={{
      sx: { padding: '12px' }
    }}
  />)

  const countryOptions = Object.entries(data.countries || []).map(([key, countryName]) => ({
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
      disabled={!!countriesDisabled}
      options={countryOptions}
      sx={{
        width: '-webkit-fill-available', padding: '12px', height: '80px'
      }}
      renderInput={(params) => <CssTextField {...params} label="Country" helperText={countriesDisabled ? "There are no options at this time" : `Choose or type a Country's name`} />}
      onChange={handleChangeCountry}
    />
  );
}

export default CountrySelect;