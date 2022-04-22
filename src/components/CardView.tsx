import { Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import TypographyTheme from './Typography';
import { useWeather } from '../api/weatherByCity';


const Container = styled('div')(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(121,208,255,1) 2%, rgba(141,181,222,1) 98%)',
  height: '40%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Chip = styled('div')`
  background-color: #2196f3;
  color: #fafafa;
  border-radius: 4px;
  text-transform: uppercase;
  width: fit-content;
  padding: 4px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 3px 4px 5px 4px;
`;
const Country = styled(Chip)`
  background-color: #1769aa;
`;

const FirstDetails = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const ChipsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 12px;
`;

const BackgroundContainer = styled('div')`
  background-color: #a8b2bd;
  padding: 24px 24px 32px 24px;
  display: flex;
  gap: 12px;
  flex-flow: wrap;
  border-end-end-radius: 20px;
  border-start-end-radius: 20px;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Typography = styled('div')(({ theme }) => ({
  color: '#fcfcfc',
  display: 'flex',
  gap: '6px',
  flexDirection: 'row',
  alignItems: 'center',
}));

const ConditionText = styled('div')(({ theme }) => ({
  color: '#7d858c',
  display: 'flex',
  gap: '6px',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '24px',
}));

const DateLabel = styled('div')(({ theme }) => ({
  color: '#4d6787c9',
  display: 'flex',
  gap: '6px',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '14px',
  paddingBottom: '12px'
}));

const ColumnContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  font-size: 14px;
  align-items: flex-end;
`;

const ClockChip = styled('div')`
  background-color: #ced1d6;
  border-radius: 4px;
  padding: 3px 6px 4px 6px;
  color: #fafafa;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

type CardViewProps = {
  city: string | null;
}

const CardView = ({ city }: CardViewProps) => {
  const { isLoading, error, data } = useWeather(city);
  console.log('all', data);

  if (isLoading || error || !data) return (<Container></Container>);

  return (
    <Container>
      <Box sx={{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '20px',
        },
      }} >
        <Paper elevation={6}>
          <FirstDetails>
            <ConditionText>
              {data.current.condition.text}
            </ConditionText>
            <img src={data.current.condition.icon} width="57px" />
            <DateLabel>
              <EventIcon fontSize='small' />
              {new Date(data.location.localtime).toLocaleDateString([], {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}
            </DateLabel>
            <ClockChip>
              <WatchLaterIcon />
              {new Date(data.location.localtime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
            </ClockChip>
            <ChipsContainer>
              <Country>
                <LocationOnIcon fontSize='small' />
                <div>
                  {data.location.country}
                </div>
              </Country>
              <Chip>
                <LocationCityIcon fontSize='small' />
                <div>
                  {data.location.name}
                </div>
              </Chip>
            </ChipsContainer>
          </FirstDetails>
          <BackgroundContainer>
            <ColumnContainer>
              <Typography>
                Cloud {data.current.cloud}%
                <CloudIcon fontSize='small' />
              </Typography>
              <Typography>
                Humidity {data.current.humidity}%
                <WaterIcon fontSize='small' />
              </Typography>
              <Typography>
                {data.current.wind_dir} {data.current.wind_kph}sKm/h
                <AirIcon fontSize='small' />
              </Typography>
              <Typography>
                {data.current.temp_c} °C, Feels like {data.current.feelslike_c} °C
                <ThermostatIcon fontSize='small' />
              </Typography>
              <Typography>
                {data.current.temp_f} °F, Feels like {data.current.feelslike_f} °F
                <DeviceThermostatIcon fontSize='small' />
              </Typography>
            </ColumnContainer>
          </BackgroundContainer>
        </Paper>
      </Box>
    </Container >
  );
}
export default CardView;
