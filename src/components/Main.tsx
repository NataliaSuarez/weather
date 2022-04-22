import { useState } from 'react';
import { styled } from '@mui/system';


import Header from './Header';
import FilterSelectors from './FilterSelectors';
import CardView from './CardView';
import Background from '../icons/background.svg';

/** Container to handle background image */
const Paper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: url(${Background});
  background-size: cover;
`;

/** Container to adjust elements to end */
const Container = styled('div')`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Main = () => {

  const [country, setCountry] = useState({ label: 'Argentina', key: 'AR' });
  const [city, setCity] = useState(null);

  return (
    <Paper>
      <Container>
        <Header />
        <FilterSelectors country={country} setCountry={setCountry} setCity={setCity} />
        <CardView city={city} />
      </Container>
    </Paper>
  );
}
export default Main;
