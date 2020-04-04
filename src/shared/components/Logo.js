import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LOGO } from '../../../assets/images';

const Logo = props => {
  return (
    <View>
      <Image source={LOGO} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 115,
    marginLeft: 14,
  }
});
