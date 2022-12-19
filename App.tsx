import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from './components/PrimaryButton';
import WelcomeScreen from './screens/WelcomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [selectedNum, setSelectedNum] = useState<number>();

  const handleSelectedNum = (num: number) => {
    console.log('in handleSelectedNum\nselectedNum is: ', selectedNum);
    setSelectedNum(num);
    console.log("after setting it's: ", selectedNum);
  };

  if (selectedNum) {
    var screen = <GameScreen />;
  } else {
    var screen = <WelcomeScreen onSelectNum={handleSelectedNum} />;
  }

  return (
    <LinearGradient colors={['#291528', '#9E829C']} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={{ uri: 'https://unsplash.it/500/500' }}
        resizeMode='cover'
        imageStyle={styles.bgImage}
      >
        {/* <StatusBar style='auto' /> */}
        {/* <WelcomeScreen onSelectNum={handleSelectedNum} /> */}
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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
    opacity: 0.15,
  },
});
