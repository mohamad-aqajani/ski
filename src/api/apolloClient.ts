import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  /** Do not make .env file for ths, .env file is useless in frontend development 🤣 */
  uri: 'https://snowtooth.moonhighway.com/graphql',
  cache: new InMemoryCache(),
});
