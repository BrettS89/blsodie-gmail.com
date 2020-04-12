import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import titleStyles from '../styles/screenTitle';

const SpotTitle = props => {
  const spotsState = useSelector(state => state.spots);
  const spot = spotsState.spots.find(s => s.company._id === spotsState.spotId);
  if (!spot) return null;
  if (!spot.company) return null;
  return (
    <View>
      <Text style={titleStyles.text}>
        {spot.company.name}
      </Text>
    </View>
  );
};

export default SpotTitle;
