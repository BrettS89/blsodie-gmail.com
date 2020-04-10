import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import NotLoggedInView from './components/NotLoggedIn';
import { GET_USER_SUBSCRIPTIONS, CANCEL_USER_SUBSCRIPTION } from '../../redux/actions';

const Account = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userSubscriptionId, setUserSubscriptionId] = useState(null);

  const dispatch = useDispatch();
  const userSubscriptions = useSelector(state => state.subscription.userSubscriptions);
  const user = useSelector(state => state.user.userData);

  useEffect(() => {
    if (Object.keys(user).length) {
      dispatch({ type: GET_USER_SUBSCRIPTIONS });
    }
  }, []);

  function cancelSubscription(id) {
    dispatch({ type: CANCEL_USER_SUBSCRIPTION, payload: { userSubscriptionId, closeModal } });
  }

  function openCancelModal(id) {
    setModalOpen(true);
    setUserSubscriptionId(id);
  }

  function closeModal() {
    setModalOpen(false);
    setUserSubscriptionId(null);
  }

  function navigate(screen) {
    props.navigation.navigate(screen);
  }

  return Object.keys(user).length
    ? (
        <View
          subscriptions={userSubscriptions}
          user={user}
          cancelSubscription={cancelSubscription}
          openModal={openCancelModal}
          closeModal={closeModal}
          modalOpen={modalOpen}
        />
      )
    : <NotLoggedInView navigate={navigate}/>  
};

export default Account;
