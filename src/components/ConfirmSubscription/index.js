import React, { useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmSubscriptionView from './view';
import { SUBSCRIBE } from '../../redux/actions';

const ConfirmSubscription = props => {
  const dispatch = useDispatch();
  const subscription = useSelector(state => state.subscription.subscription);
  const user = useSelector(state => state.user.userData);
  const userActivated = user.activated;
  const firstSubscription = user.firstSubscription;
  let backHandler = null;

  useEffect(() => {
    backHandler = BackHandler.addEventListener('hardwareBackPress', backPress);

    return () => {
      backHandler.remove();
    };
  }, []);

  function backPress() {
    props.navigation.navigate('Spot');
    return true;
  }
  
  function subscribe() {
    const data = {
      subscriptionId: subscription._id,
    };
    dispatch({ type: SUBSCRIBE, payload: { data, navigate } });
  }

  function navigate() {
    props.navigation.navigate('Subscriptions');
  }

  function verifyMobileNumber() {
    props.navigation.navigate('PhoneInput');
  }

  return subscription
    ? (
      <ConfirmSubscriptionView
        subscription={subscription}
        subscribe={subscribe}
        firstSubscription={firstSubscription}
        userActivated={userActivated}
        verifyMobileNumber={verifyMobileNumber}
      />
    )
    : <View />
};

export default ConfirmSubscription;
