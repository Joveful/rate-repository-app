import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  input: {
    padding: 10,
    marginVertical: 7,
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
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log('Login successful, access token:', data);
      navigate('/');
    } catch (e) {
      console.log('Login failed:', e);
    }
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput 
        id='username'
        style={{borderColor: formik.errors.username && formik.touched.username ? 
          theme.colors.error : 
          theme.colors.inputBorder, 
          ...styles.input}} 
        placeholder='Username' 
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: theme.colors.error }}>{formik.errors.username}</Text>
      )}
      <TextInput 
        id='password'
        style={{borderColor: formik.errors.password && formik.touched.password ? 
          theme.colors.error : 
          theme.colors.inputBorder, 
          ...styles.input}} 
        placeholder='Password' 
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: theme.colors.error }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text fontWeight='bold' style={styles.button.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;