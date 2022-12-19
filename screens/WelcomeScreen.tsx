import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const WelcomeScreen = ({ onSelectNum }) => {
  // const [selectedNum, setSelectedNum] = useState<number>();
  const [number, setNumber] = useState<{ number: number | null }>({
    number: null,
  });

  const handleNumReset = () => {
    setNumber({ number: null });
  };

  const handleConfirm = () => {
    // Error-checking
    if (isNaN(number.number) || number.number <= 0 || number.number > 69) {
      Alert.alert(
        'Wrong input!',
        'Your number needs to be a positive number less than 70',
        [
          {
            text: 'Shit...um, alright?',
            style: 'destructive',
            onPress: handleNumReset,
          },
        ]
      );
      return;
    }

    onSelectNum(number.number);
  };

  useEffect(() => {
    console.log(number, '\n', number.number);
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        keyboardType='number-pad'
        maxLength={2}
        // autoFocus={true}
        value={number?.number?.toString()}
        onChangeText={textValue => {
          const num = parseInt(textValue);
          if (!isNaN(num) && !isNaN(num)) {
            setNumber({ number: num });
          } else if (textValue === '') {
            setNumber({ number: null });
          }
        }}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='CONFIRM' onPress={handleConfirm} />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <PrimaryButton title='RESET' onPress={handleNumReset} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
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
  buttonsContainer: {
    flexDirection: 'row',
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: '#ddb52f',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default WelcomeScreen;
