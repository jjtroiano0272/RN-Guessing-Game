import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../utils/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { GameOverContext } from '../contexts/GameOverContext';

const getRandomNum = (min: number, max: number, exclude: number) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    // run it again
    getRandomNum(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minBoundary = 0;
let maxBoundary = 100;

interface IProps {
  userNum: number;
  setGameOver?: (gameOver: boolean) => void;
}

const GameScreen = ({ userNum, setGameOver }: IProps) => {
  // State variables
  const initGuess = getRandomNum(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState<number>(initGuess);
  const { gameOverGlobal, setGameOverGlobal } = useContext(GameOverContext);

  // Handlers
  const handleNextGuess = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userNum) ||
      (direction === 'higher' && currentGuess > userNum)
    ) {
      // TODO placeholder for Arnold Schwarnegger 'Don't bullshit me!' GIF
      return Alert.alert("Don't bullshit me!");
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else if (direction === 'higher') {
      minBoundary = currentGuess + 1;
    }

    // If you haven't guessed it, generate new random number
    setCurrentGuess(getRandomNum(minBoundary, maxBoundary, currentGuess));
  };

  // Constantly check if game is still ongoing or not
  useEffect(() => {
    if (currentGuess === userNum) {
      setGameOverGlobal(true);
    }
  }, [currentGuess, userNum, setGameOverGlobal]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text style={styles.bodyText}>Higher or Lower?</Text>
        <View style={{ flexDirection: 'row' }}>
          <PrimaryButton onPress={handleNextGuess.bind(this, 'lower')}>
            <Ionicons name='md-remove' size={24} color={Colors.primary} />
          </PrimaryButton>
          <PrimaryButton onPress={handleNextGuess.bind(this, 'higher')}>
            <Ionicons name='md-add' size={24} color={Colors.primary} />
          </PrimaryButton>
        </View>
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

  bodyText: {
    fontSize: 20,
    color: Colors.primary,
  },
});

export default GameScreen;
