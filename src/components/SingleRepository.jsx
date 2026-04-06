import { useParams } from "react-router-native";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native"

import RepositoryItem from "./RepositoryItem"
import useRepository from "../hooks/useRepository";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
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

const SingleRepository = () => {
  const id = useParams().id;
  const { repository, loading } = useRepository(id);
  
  if (loading) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <>
      <RepositoryItem item={repository} />
      <View style={styles.container}>
        <Pressable onPress={() => Linking.openURL(`https://github.com/${repository.fullName}`)} style={styles.button}>
          <Text fontWeight='bold' style={styles.button.buttonText}>Open in GitHub</Text>
        </Pressable>
      </View>
    </>
  )
};

export default SingleRepository;