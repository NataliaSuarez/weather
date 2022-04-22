import "@fontsource/cooper-hewitt";
import { QueryClient, QueryClientProvider } from 'react-query';
import { styled } from '@mui/system';


export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
};
const queryClient = new QueryClient();

const Container = styled('div')`
  font-family: "Cooper Hewitt", sans-serif;
`;

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Story />
      </Container>
    </QueryClientProvider>
  )
];
