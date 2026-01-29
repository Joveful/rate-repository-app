import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    padding: 10
  }

});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>      
        <Link to="/">
          <Text style={styles.title}>Repositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/signin">
          <Text style={styles.title}>Sign in</Text> 
        </Link>
      </Pressable>
    </View>
  );
};

export default AppBar;