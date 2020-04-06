import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import Subscription from './components/Subscription';
import UseCreditModal from './components/UseCreditModal';

const UseSubscriptionsView = ({ subs, openModal, closeModal, modalIsOpen }) => {
  function renderSubscriptions() {
    return subs.map(s => (
      <Subscription
        key={s.name}
        sub={s}
        openModal={openModal}
      />
    ));
  }

  return (
    <ScrollView style={styles.container} >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          My Subscriptions
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 13 }}>
          Use your phone to show this screen when you are at the store and they will tap redeem
        </Text>
      </View>
      <View>
        {renderSubscriptions()}
      </View>
      <UseCreditModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </ScrollView>
  );
};

export default UseSubscriptionsView;
