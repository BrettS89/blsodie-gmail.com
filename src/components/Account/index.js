import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { GET_USER_SUBSCRIPTIONS, CANCEL_USER_SUBSCRIPTION } from '../../redux/actions';

const Account = props => {
  const dispatch = useDispatch();
  const userSubscriptions = useSelector(state => state.subscription.userSubscriptions);

  useEffect(() => {
    dispatch({ type: GET_USER_SUBSCRIPTIONS });
  }, []);

  function cancelSubscription(id) {

  }

  return (
    <View
      subscriptions={userSubscriptions}
      cancelSubscription={cancelSubscription}
    />
  );
};

export default Account;
