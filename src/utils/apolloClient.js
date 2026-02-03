import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';


const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://192.168.0.58:4000/graphql' }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;