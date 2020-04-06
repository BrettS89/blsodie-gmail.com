import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';

const UseSubscriptions = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subscriptionName, setSubscriptionName] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [credits, setCredits] = useState(null);

  const userSubs = useSelector(state => state.subscription.credits);

  function openModal(subName, itmId, creds) {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setItemId(null);
    setSubscriptionName(null);
    setCredits(null);
  }

  return (
    <View
      subs={userSubs}
      openModal={openModal}
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
    />
  );
};

export default UseSubscriptions;
