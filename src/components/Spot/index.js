import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import SpotView from './view';
import { getOneSpot } from '../../lib/api';

const Spot = props => {
  const [spot, setSpot] = useState(null);
  const spotId = useSelector(state => state.spots.spotId);

  useEffect(() => {
    async function getSpot() {
      if (spotId) {
        const { company } = await getOneSpot(spotId);
        setSpot(company);
      }
    }
    getSpot();
  }, [spotId]);

  return spot
    ? (
      <SpotView
        spot={spot}
      />
    )
    : <View><Text>Loading</Text></View>
};

export default Spot;
