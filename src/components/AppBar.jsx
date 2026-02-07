import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/client/react';

import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import useSignedInUser from '../hooks/useSignedInUser';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    padding: 10,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }

});

const AppBar = () => {
  const { signedInUser, loading } = useSignedInUser();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>      
          <Link to="/">
            <Text style={styles.title}>Repositories</Text>
          </Link>
        </Pressable>
        {!loading && signedInUser ? (
          <Pressable>
            <Text style={styles.title} onPress={signOut}>Sign out</Text>
          </Pressable>
          ) : (
          <Pressable>
            <Link to="/signin">
              <Text style={styles.title}>Sign in</Text>
            </Link>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;