import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

import TypographyTheme from './Typography';
import CountrySelect from './CountrySelect';
import CityByCountrySelect from './CityByCountrySelect';
import CardView from './CardView';
import Background from '../icons/background.svg';
import Cloud from '../icons/cloud.svg';


const Paper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: url(${Background});
  background-size: cover;
`;

const Container = styled('div')`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Header = styled('div')(({ theme }) => ({
  position: 'relative',
  '& > h5': {
    fontStyle: 'italic',
  }
}));

const TitleApp = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: theme.spacing(2),
  fontSize: '32px',
  display: 'flex',
  gap: '8px',
  flexDirection: 'row',
  alignItems: 'flex-end',
}));

const SubtitleApp = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  opacity: '.6',
  padding: theme.spacing(2),
  fontSize: '18px',
}));

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

const Main = () => {

  const [country, setCountry] = useState({ label: 'Argentina', key: 'AR' });
  const [city, setCity] = useState(null);

  return (
    <Paper>
      <Container>
        <Header>
          <TitleApp>
            Weather&Clock
            <img src={Cloud} width="72px" />
          </TitleApp>
          <SubtitleApp variant='h5'>A simple and easy application to check the weather by selecting a country and a city</SubtitleApp>
        </Header>
        <FiltersContainer>
          <FilterSubtitle variant='body1'>Search a country and choose city to get current information about weather</FilterSubtitle>
          <SelectContainer>
            <CountrySelect handleChange={setCountry} />
            <CityByCountrySelect countryKey={country.key} handleChange={setCity} />
          </SelectContainer>
        </FiltersContainer>
        <CardView city={city} />
      </Container>
    </Paper>
  );
}
export default Main;
