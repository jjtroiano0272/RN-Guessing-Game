import { StyleSheet, TextInput, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#121212',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
});

export default Card;
