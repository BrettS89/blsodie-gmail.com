import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import colors from '../styles/colors';

const HeaderSkip = ({ navigation, screen }) => {
  const app = useSelector(state => state.app);
  const spotId = useSelector(state => state.spots.spotId);
  const subscription = useSelector(state => state.subscription.subscription);
  let navTo = screen;
  if (spotId && app.navToSpot) navTo = 'Spot';
  if (subscription) navTo = 'ConfirmSubscription'; 

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(navTo)}>
      <Text style={styles.text}>
        Skip
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: '700',
    color: colors.main,
  }
});

export default withNavigation(HeaderSkip);
