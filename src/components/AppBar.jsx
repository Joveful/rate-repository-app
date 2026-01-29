import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
  },
  title: {
    color: 'white'
  }

});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>      
        <Text style={styles.title}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;