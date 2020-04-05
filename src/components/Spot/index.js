import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SpotView from './view';
import { getOneSpot } from '../../lib/api';
import { SET_SUBSCRIPTION } from '../../redux/actions';

const Spot = props => {
  const [spot, setSpot] = useState(null);
  const dispatch = useDispatch();
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

  function selectSubscription(subscription) {
    subscription.company = {
      name: spot.name,
      photo: spot.photo,
    };
    dispatch({ type: SET_SUBSCRIPTION, payload: subscription });
    props.navigation.navigate('ConfirmSubscription');
  }

  return spot
    ? (
      <SpotView
        spot={spot}
        selectSubscription={selectSubscription}
      />
    )
    : <View><Text>Loading</Text></View>
};

export default Spot;
