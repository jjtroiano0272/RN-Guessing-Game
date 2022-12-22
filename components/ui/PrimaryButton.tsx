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
import Colors from '../../utils/colors';

interface IProps {
  title?: string;
  onPress: () => any;
  color?: string;
  children?: any;
}

const PrimaryButton = ({
  title,
  onPress,
  color = Colors.secondary,
  children,
}: IProps) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      // backgroundColor: Colors.tertiary,
      backgroundColor: color,
      borderRadius: 16,
      paddingVertical: 16,
      paddingHorizontal: 64,
      elevation: 2,
      margin: 4,
    },
    outerContainer: {
      borderRadius: 28,
      // margin: 8,
    },
    buttonInnerContainer: {
      // foo
    },
    text: {
      color: Colors.primary,
      textAlign: 'center',
    },
    pressed: {
      opacity: 0.75,
      backgroundColor: Colors.accent2,
    },
  });

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
        android_ripple={{ color: '#ffe232' }}
        onPress={onPress}
      >
        <Text style={styles.text}>{title || children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
