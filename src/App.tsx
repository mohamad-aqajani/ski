import { ApolloProvider } from '@apollo/client'
import { client } from './api/apolloClient'
import Main from './pages/Main'
import { ThemeProvider } from './theme/ThemeProvider'

function App() {
 return (
  <ApolloProvider client={client}>
   <ThemeProvider>
    <Main />
   </ThemeProvider>
  </ApolloProvider>
 )
}

export default App
