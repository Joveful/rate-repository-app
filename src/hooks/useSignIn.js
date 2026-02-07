import { useApolloClient, useMutation } from '@apollo/client/react';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: { credentials: { username, password } }
    });
    await authStorage.setAccessToken(response.data.authenticate.accessToken);
    apolloClient.resetStore();
    return response;
  }

  return [signIn, result];
};

export default useSignIn;