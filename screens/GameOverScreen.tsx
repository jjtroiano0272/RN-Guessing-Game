import { useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { GameOverContext } from '../contexts/GameOverContext';
import Colors from '../utils/colors';

interface IProps {
  setSelectedNum?: () => void;
}

const GameOverScreen = ({ setSelectedNum }: IProps) => {
  const { gameOverGlobal, setGameOverGlobal } = useContext(GameOverContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Game Ovah, Bro!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title={'HOME'}
          onPress={() => setGameOverGlobal(false)}
        />
        <PrimaryButton
          title={'Play again'}
          onPress={() =>
            Alert.alert('Home', 'This would take you back to the main screen')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.primary,
    fontSize: 50,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default GameOverScreen;
