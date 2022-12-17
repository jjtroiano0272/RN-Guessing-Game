import React from 'react';
import { Alert, Button, Text, TouchableOpacity } from 'react-native';

interface IProps {
  title: string;
}

const PrimaryButton = ({ title }: IProps) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: '#ccc', padding: 50, borderRadius: 20 }}
      onPress={() =>
        Alert.alert('Whoa, congrats, you can like, touch a button. Wow 👀')
      }
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
