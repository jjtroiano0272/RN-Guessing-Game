import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from './components/PrimaryButton';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    <>
      {/* <StatusBar style='auto' /> */}
      <WelcomeScreen />
    </>
    // <Text style={{ fontSize: 50 }}>Hello World!!!!</Text>
    // <StatusBar style='auto' />
    // <WelcomeScreen />
    // <Text style={{ fontSize: 50 }}>Hello World!!!!</Text>
    // <PrimaryButton title='foo' />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
