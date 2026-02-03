import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import Constants from 'expo-constants';

const apolloUri = Constants.expoConfig.extra.apolloUri;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: apolloUri }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;