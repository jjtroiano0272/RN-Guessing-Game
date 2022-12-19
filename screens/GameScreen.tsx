import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const GameScreen = () => {
  const handleIncrementNum = () => {
    console.log('+ Pressed');
  };

  const handleDecrementNum = () => {
    console.log('- Pressed');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Opponent's Guess</Text>
      <View>
        <Text style={styles.bodyText}>Higher or Lower?</Text>
        <PrimaryButton title='+' onPress={handleIncrementNum} />
        <PrimaryButton title='-' onPress={handleDecrementNum} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 50,
    fontWeight: '200',
    color: '#fff',
    padding: 16,
  },
  bodyText: {
    color: '#ccc',
  },
});

export default GameScreen;
