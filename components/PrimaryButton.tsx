import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProps {
  title: string;
  onPress: () => any;
}

const PrimaryButton = ({ title, onPress }: IProps) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
        android_ripple={{ color: '#ffe232' }}
        onPress={onPress}
      >
        <Text style={styles.primaryText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#690477',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  outerContainer: {
    borderRadius: 28,
    margin: 4,
  },
  buttonInnerContainer: {},
  primaryText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
