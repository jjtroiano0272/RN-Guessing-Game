import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../utils/colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { GameOverContext } from '../contexts/GameOverContext';
import * as Haptics from 'expo-haptics';

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
  guessCount: number;
  setGuessCount?: (num: number) => void;
}

const GameScreen = ({
  userNum,
  setGameOver,
  guessCount,
  setGuessCount,
}: IProps) => {
  // State variables
  const initGuess = getRandomNum(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState<number>(initGuess);
  const [guessLog, setGuessLog] = useState<number[]>([]);
  const { gameOverGlobal, setGameOverGlobal } = useContext(GameOverContext);

  // Handlers
  const handleNextGuess = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userNum) ||
      (direction === 'higher' && currentGuess > userNum)
    ) {
      // TODO placeholder for Arnold Schwarnegger 'Don't bullshit me!' GIF

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      return Alert.alert("Don't bullshit me!");
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else if (direction === 'higher') {
      minBoundary = currentGuess + 1;
    }

    // If you haven't guessed it, generate new random number
    setCurrentGuess(getRandomNum(minBoundary, maxBoundary, currentGuess));
    setGuessLog(prev => [...prev, currentGuess]);
    setGuessCount(guessCount + 1);
  };

  // Constantly check if game is still ongoing or not
  useEffect(() => {
    if (currentGuess === userNum) {
      setGameOverGlobal(true);
    }
  }, [currentGuess, userNum, setGameOverGlobal]);

  useEffect(() => {
    let minBoundary = 0;
    let maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Title>Opponent's Guess</Title>
      </View>

      <View style={{ flex: 1 }}>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>

      <View style={{ flex: 0.4 }}>
        <FlatList
          data={guessLog}
          renderItem={({ item }) => (
            <Text style={styles.guessList}>{item.toString()}</Text>
          )}
          keyExtractor={item => item.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          flex: 0.6,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
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
    marginBottom: 20,
  },
  guessList: {
    fontSize: 30,
    color: Colors.secondary,
    marginVertical: 5,
  },
});

export default GameScreen;
