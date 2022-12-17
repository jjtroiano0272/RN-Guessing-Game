import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <PrimaryButton title='test' />
      <TextInput
        style={styles.textInput}
        keyboardType='number-pad'
        maxLength={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#471c73',
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
  inputContainer: {
    padding: 16,
    backgroundColor: '#471c73',
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
  textInput: {
    height: 50,
    fontSize: 32,
    color: '#ddb52f',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
