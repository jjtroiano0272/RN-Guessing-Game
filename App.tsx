import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from './components/ui/PrimaryButton';
import WelcomeScreen from './screens/WelcomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { GameOverContext } from './contexts/GameOverContext';

export default function App() {
  const [selectedNum, setSelectedNum] = useState<number>();
  // const [gameOver, setGameOver] = useState<boolean>(false);
  const gameOver = useContext(GameOverContext);
  const [gameOverGlobal, setGameOverGlobal] = useState<boolean>(false);
  const providerValue = useMemo(
    () => ({ gameOverGlobal, setGameOverGlobal }),
    [gameOverGlobal, setGameOverGlobal]
  );

  const handleSelectedNum = (num: number) => {
    setSelectedNum(num);
    setGameOverGlobal(false);
  };

  var screen: JSX.Element;
  if (!selectedNum) {
    screen = <WelcomeScreen onSelectNum={handleSelectedNum} />;
  } else {
    screen = <GameScreen userNum={selectedNum} />;
  }
  if ((gameOver && selectedNum) || gameOverGlobal) {
    screen = <GameOverScreen />;
  }

  return (
    <GameOverContext.Provider value={providerValue}>
      <LinearGradient colors={['#291528', '#ccc']} style={styles.rootScreen}>
        <ImageBackground
          style={styles.rootScreen}
          imageStyle={styles.bgImage}
          source={{ uri: 'https://unsplash.it/seed/picsum/1000/500' }}
          resizeMode='cover'
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </GameOverContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    // backgroundColor: '#3A3E3B',
    flex: 1,
  },
  bgImage: {
    opacity: 0.3,
  },
});
