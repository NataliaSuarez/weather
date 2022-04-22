import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import theme from './theme';
import Main from './components/Main';

/** Query Client is useful for caching API data  */
const queryClient = new QueryClient();

const Container = styled('div')(({ theme }: any) => ({
  fontFamily: `${theme.typography.fontFamily}`,
  height: '100%',
  width: '100%',
}));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* Theme of material ui with styles */}
        <Container>
          <Main />
        </Container>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;
