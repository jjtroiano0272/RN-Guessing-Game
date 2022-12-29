import { useContext } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { GameOverContext } from '../contexts/GameOverContext';
import Colors from '../utils/colors';
import ImageLoad from 'react-native-image-placeholder';

interface IProps {
  setSelectedNum?: (num: number | null) => void;
  guessCount: number;
  setGuessCount: (num: number | null) => void;
  selectedNum: number;
}

const GameOverScreen = ({
  setSelectedNum,
  guessCount,
  setGuessCount,
  selectedNum,
}: IProps) => {
  const { gameOverGlobal, setGameOverGlobal } = useContext(GameOverContext);
  const handleGameReset = () => {
    setGameOverGlobal(false);
    setGuessCount(null);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>YOU WIN</Text> */}
      <View
        style={{
          borderRadius: 30,
          overflow: 'hidden',
          height: 400,
          width: 400,
          marginVertical: 30,
        }}
      >
        <ImageLoad
          style={{
            height: '100%',
            width: '100%',
          }}
          loadingStyle={{ size: 'large', color: '#cccccc' }}
          source={{
            uri: 'https://i.kym-cdn.com/photos/images/newsfeed/000/517/111/fbd.jpg',
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton title={'HOME'} onPress={() => setSelectedNum(null)} />
        <PrimaryButton title={'Play again'} onPress={handleGameReset} />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{guessCount}</Text>{' '}
        guesses to get my number{' '}
        <Text style={styles.highlight}>{selectedNum}</Text>
      </Text>
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
  summaryText: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 50,
  },
  highlight: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ae3dc7',
  },
});

export default GameOverScreen;
