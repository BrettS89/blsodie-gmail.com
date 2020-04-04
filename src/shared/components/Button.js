import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: colors.main,
    borderRadius: 50,
    paddingHorizontal: 20,
    height: 40,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
  }
});
