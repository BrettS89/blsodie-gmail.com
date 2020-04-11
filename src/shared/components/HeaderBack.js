  
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import colors from '../styles/colors';

const HeaderBack = ({ navigation, screen }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(screen)}>
      <Back name="ios-arrow-round-back" size={40} color={colors.main} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
  }
});

export default withNavigation(HeaderBack);
