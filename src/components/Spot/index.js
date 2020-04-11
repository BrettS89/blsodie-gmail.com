import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SpotView from './view';
import { getOneSpot } from '../../lib/api';
import { SET_SUBSCRIPTION, OPEN_LOGIN_MODAL, OPEN_CREDIT_CARD_MODAL } from '../../redux/actions';

const Spot = props => {
  const [spot, setSpot] = useState(null);
  const dispatch = useDispatch();
  const spotId = useSelector(state => state.spots.spotId);
  const user = useSelector(state => state.user.userData);

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

    if (Object.keys(user).length && user.stripeId) {
      dispatch({ type: SET_SUBSCRIPTION, payload: subscription });
      props.navigation.navigate('ConfirmSubscription');
    } else if (Object.keys(user).length && !user.stripeId) {
      dispatch({ type: OPEN_CREDIT_CARD_MODAL });
    } else {
      dispatch({ type: OPEN_LOGIN_MODAL });
    }
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
