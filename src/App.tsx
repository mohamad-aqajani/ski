import { ThemeProvider } from "./theme/ThemeProvider";
import Main from "./screens/Main";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://snowtooth.moonhighway.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
