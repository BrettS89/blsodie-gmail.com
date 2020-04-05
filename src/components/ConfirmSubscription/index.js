import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmSubscriptionView from './view';
import { SUBSCRIBE } from '../../redux/actions';

const ConfirmSubscription = props => {
  const dispatch = useDispatch();
  const subscription = useSelector(state => state.subscription.subscription);
  
  function subscribe() {
    const data = {
      subscriptionId: subscription._id,
    };
    dispatch({ type: SUBSCRIBE, payload: { data, navigate } });
  }

  function navigate() {
    props.navigation.navigate('Subscriptions');
  }

  return subscription
    ? (
      <ConfirmSubscriptionView
        subscription={subscription}
        subscribe={subscribe}
      />
    )
    : <View />
};

export default ConfirmSubscription;
