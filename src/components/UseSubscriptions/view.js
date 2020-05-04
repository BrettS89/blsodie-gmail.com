import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Button from '../../shared/components/Button';
import styles from './styles';
import Subscription from './components/Subscription';
import UseCreditModal from './components/UseCreditModal';

const UseSubscriptionsView = ({ subs, openModal, closeModal, modalIsOpen, useCredit, navigateToSpots, itemName }) => {
  function renderSubscriptions() {
    return subs.map(s => (
      <Subscription
        key={s.name}
        sub={s}
        openModal={openModal}
      />
    ));
  }

  function renderNoSubs() {
    if (!subs.length) {
      return (
        <View style={styles.noSubs}>
          <View style={styles.noSubsContent}>
            <Text style={styles.noSubsText}>
              You don't have any subscriptions
            </Text>
            <Button
              text="Find subscriptions"
              buttonStyle={{ width: 180 }}
              onPress={navigateToSpots}
            />
          </View>
        </View>
      );
    }
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
      {renderNoSubs()}
      <UseCreditModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        useCredit={useCredit}
        itemName={itemName}
      />
    </ScrollView>
  );
};

export default UseSubscriptionsView;
