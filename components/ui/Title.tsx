import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.titleText}>{children}</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    // fontFamily: 'proza-regular',
    fontSize: 50,
    fontWeight: '200',
    color: '#fff',
    padding: 16,
  },
});

export default Title;
