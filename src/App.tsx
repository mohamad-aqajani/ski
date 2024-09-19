import { ApolloProvider } from '@apollo/client';
import { client } from './api/apolloClient';
import Main from './pages/Main';
import { ThemeProvider } from './theme/ThemeProvider';
import { TrailProvider } from './contexts/TrailContext/TrailContext';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <TrailProvider>
          <Main />
        </TrailProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
