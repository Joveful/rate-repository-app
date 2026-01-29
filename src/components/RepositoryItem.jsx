import { View,  StyleSheet, Image } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  column: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingBottom: 10
  },
  langTag: {
    backgroundColor: '#0366d6',
    color: 'white',
    alignSelf: 'flex-start',
    borderRadius: 3,
    padding: 3,
    marginTop: 5,
    paddingHorizontal: 5
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    metricCol: {
      alignItems: 'center'
    }
  }
})

const RepositoryItem = ({item}) => {
  const displayNumber = (num) => {
    if (num >= 1000) {
      return Math.round(num / 100) / 10 + 'k';
    }
    return num;
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Image 
        style={styles.logo}
        source={{uri :item.ownerAvatarUrl}}
      />
        <View style={styles.column}>
          <Text fontSize="subheading" fontWeight='bold'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <Text style={styles.langTag}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.metricRow}>
        <View style={styles.metricRow.metricCol}>
          <Text fontWeight='bold'>{displayNumber(item.stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.metricRow.metricCol}>
          <Text fontWeight='bold'>{displayNumber(item.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.metricRow.metricCol}>
          <Text fontWeight='bold'>{displayNumber(item.reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.metricRow.metricCol}>
          <Text fontWeight='bold'>{item.ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  )
};

export default RepositoryItem;