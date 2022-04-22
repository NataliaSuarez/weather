import React, { useMemo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';

import CssTextField from './CustomTextField';
import { useCities } from '../api/cities';

type CityByCountrySelectProps = {
  countryKey: string;
  handleChange: any;
}

const CityByCountrySelect = ({ countryKey, handleChange }: CityByCountrySelectProps) => {
  const { isLoading, error, data } = useCities(countryKey);

  if (isLoading || error) return (<CssTextField
    disabled
    label="City"
    sx={{ width: '-webkit-fill-available', padding: '12px' }}
    InputLabelProps={{
      sx: { padding: '12px' }
    }}
  />)


  const cityOptions = data.cities ? data.cities.map(({ name }: any) => ({
    label: name,
    key: name,
  })) : [];

  const handleChangeCity = (event: any, value: any, reason: string) => {
    if (reason === 'selectOption') handleChange(value.label);
    if (reason === 'clear' || reason === 'removeOption') handleChange(null);
  }

  return (
    <Autocomplete
      freeSolo
      disablePortal
      options={cityOptions}
      sx={{ width: '-webkit-fill-available', padding: '12px' }}
      renderInput={(params) => <CssTextField {...params} label="City" />}
      onChange={handleChangeCity}
    />
  );
}

export default CityByCountrySelect;