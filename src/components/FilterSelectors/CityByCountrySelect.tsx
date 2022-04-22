import React, { useMemo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';

import CssTextField from './CustomTextField';
import { useCities } from '../../api/cities';
import { useCountries } from '../../api/countries';

type CityByCountrySelectProps = {
  countryKey: string;
  handleChange: any;
}

const CityByCountrySelect = ({ countryKey, handleChange }: CityByCountrySelectProps) => {
  const { isLoading: countriesLoading, error: countriesError, data: countriesData } = useCountries();
  const { isLoading, error, data } = useCities(countryKey);

  const countriesDisabled = countriesLoading || countriesError || !countriesData.countries || countriesData.countries?.length === 0;
  const citiesDisabled = isLoading || error || !data.cities || data.cities?.length === 0;

  if (citiesDisabled || countriesDisabled) return (<CssTextField
    disabled
    helperText="There are no options at this time"
    label="City"
    sx={{ width: '-webkit-fill-available', padding: '12px', height: '80px' }}
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
      disabled={!!citiesDisabled || !!countriesDisabled}
      options={cityOptions}
      sx={{ width: '-webkit-fill-available', padding: '12px', height: '80px' }}
      renderInput={(params) => <CssTextField {...params} label="City" helperText={countriesDisabled || citiesDisabled ? "There are no options at this time" : `Choose or type a cities's name`}
      />}
      onChange={handleChangeCity}
    />
  );
}

export default CityByCountrySelect;