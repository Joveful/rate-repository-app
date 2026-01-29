import { Button, Pressable, StyleSheet, TextInput, View } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useFormik } from 'formik';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  input: {
    padding: 10,
    marginVertical: 7,
    borderColor: theme.colors.inputBorder,
    borderWidth: 2,
    borderRadius: 5
  },
  button: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginVertical: 7,
    backgroundColor: theme.colors.primary,
    color: theme.colors.mainBackground,
    buttonText: {
      color: 'white',
    }
  }
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput 
        id='username'
        style={styles.input} 
        placeholder='Username' 
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput 
        id='password'
        style={styles.input} 
        placeholder='Password' 
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight='bold' style={styles.button.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;