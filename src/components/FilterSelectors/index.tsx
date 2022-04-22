import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

import CountrySelect from './CountrySelect';
import CityByCountrySelect from './CityByCountrySelect';

const FilterSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
}));

const FiltersContainer = styled('div')(({ theme }) => ({
  boxShadow: '0 5px 5px 0px #dedcdc8a',
  backgroundColor: '#2a63a4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
}));

const SelectContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  width: '100%',
}));

export type Country = {
  label: string;
  key: string;
};

type FilterSelectorsProps = {
  country: Country;
  setCountry: any;
  setCity: any;
}

const FilterSelectors = ({ country, setCountry, setCity }: FilterSelectorsProps) => {

  return (
    <FiltersContainer>
      <FilterSubtitle variant='body1'>Search a country and choose city to get current information about weather</FilterSubtitle>
      <SelectContainer>
        {/* TODO: refactor Country and CityByCountry selectors in common component */}
        <CountrySelect handleChange={setCountry} />
        <CityByCountrySelect countryKey={country.key} handleChange={setCity} />
      </SelectContainer>
    </FiltersContainer>
  );
}
export default FilterSelectors;
