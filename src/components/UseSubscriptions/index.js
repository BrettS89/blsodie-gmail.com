import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { USE_CREDIT } from '../../redux/actions';

const UseSubscriptions = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subscriptionName, setSubscriptionName] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [credits, setCredits] = useState(null);
  const [userSubscriptionId, setUserSubscriptionId] = useState(null);
  const [itemName, setItemName] = useState(null);

  const dispatch = useDispatch();
  const userSubs = useSelector(state => state.subscription.credits);

  function openModal(subName, itmId, creds, userSubId, itemName) {
    setItemName(itemName);
    setModalIsOpen(true);
    setSubscriptionName(subName);
    setCredits(creds);
    setItemId(itmId);
    setUserSubscriptionId(userSubId);
  }

  function closeModal() {
    setModalIsOpen(false);
    setItemId(null);
    setSubscriptionName(null);
    setCredits(null);
    setUserSubscriptionId(null);
    setItemName(null);
  }

  async function useCredit() {
    const data = { subscriptionName, itemId, closeModal, userSubscriptionId };
    if (credits > 0) {
        dispatch({ type: USE_CREDIT, payload: data });
      }
  }

  function navigateToSpots() {
    props.navigation.navigate('Spots');
  }

  return (
    <View
      subs={userSubs}
      openModal={openModal}
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      useCredit={useCredit}
      navigateToSpots={navigateToSpots}
      itemName={itemName}
    />
  );
};

export default UseSubscriptions;
