import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

import Cloud from '../../icons/cloud.svg';

const Container = styled('div')`
  position: relative;
`;

const TitleApp = styled(Typography)(({ theme }) => ({
  color: theme.palette?.primary?.main || '#9cc0d3a6',
  padding: theme.spacing(2),
  fontSize: '32px',
  display: 'flex',
  gap: '8px',
  flexDirection: 'row',
  alignItems: 'flex-end',
}));

const SubtitleApp = styled(Typography)(({ theme }) => ({
  color: theme.palette?.primary?.dark || '#263238',
  opacity: '.6',
  padding: theme.spacing(2),
  fontSize: '18px',
  fontStyle: 'italic',
}));

const Header = () => (
  <Container>
    <TitleApp>
      Weather&Clock
      <img src={Cloud} width="72px" />
    </TitleApp>
    <SubtitleApp variant='h5'>A simple and easy application to check the weather by selecting a country and a city</SubtitleApp>
  </Container>
);

export default Header;
