import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const apolloUri = Constants.expoConfig.extra.apolloUri;

const httpLink = new HttpLink({ uri: apolloUri });

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : null,
        }
      };
    } catch (e) {
      console.log('Error getting access token:', e);
      return { headers };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;