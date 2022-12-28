import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 4,
    // borderColor: Colors.primary,
    backgroundColor: Colors.accent2,
    padding: 24,
    borderRadius: 100,
    margin: 24,
    height: 200,
    width: 200,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: Colors.accent1,
    fontSize: 96,
    fontWeight: 'bold',
  },
});

export default NumberContainer;
