import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Item from './Item';

const Subscription = ({ sub, openModal }) => {
  function renderItems() {
    return sub.items.map(i => (
      <Item
        key={i._id}
        item={i}
        openModal={openModal}
        subscriptionName={sub.name}
        userSubscriptionId={sub.userSubscriptionId}
      />
    ));
  }

  function renderCancelledBySpot() {
    if (sub.cancelledBySpot) {
      return (
        <Text style={styles.cancelled}>
          This subscription has been cancelled by the local business and will be removed once all credits are used.
        </Text>
      );
    }
  }

  return (
    <View style={styles.Subscription}>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>
          {sub.name}
        </Text>
      </View>
      <View style={styles.itemsContainer}>
      {renderItems()}
      </View>
      {renderCancelledBySpot()}
    </View>
  );
};

export default Subscription;
