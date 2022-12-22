import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert } from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../utils/colors';
import { Ionicons, Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

  return (
    <View style={styles.rootContainer}>
      <Card>
        <Title>Guess My Number...</Title>
        <Text style={{ color: '#e3b37e' }}>Enter a number</Text>
        <TextInput
          hitSlop={{ left: 100, right: 100 }}
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
          {/* container */}
          <PrimaryButton onPress={handleNumReset} color={null}>
            <MaterialCommunityIcons name='restart' size={24} />
          </PrimaryButton>
          <PrimaryButton onPress={handleConfirm}>
            <Feather name='thumbs-up' size={24} />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  container: {
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
  buttonsContainer: {
    flexDirection: 'row',
    // flex: 1,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: Colors.accent1,
    borderBottomColor: Colors.accent1,
    borderBottomWidth: 2,
    marginVertical: 32,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
