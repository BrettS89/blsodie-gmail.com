import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Subscription = ({ sub, selectSubscription }) => {
  function renderItems() {
    return sub.plan.map(i => {
      return (
        <View style={styles.itemRow} key={i.item}>
          <Text style={styles.itemText}>
            {i.item.name}
          </Text>
          <Text style={styles.itemText}>
            {i.quantity} per {sub.billingFrequency}
          </Text>
        </View>
      );
    })
  }

  function renderDescription() {
    if (sub.description) {
      return (
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {sub.description}
          </Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.Subscription}>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>
          {sub.name}
        </Text>
        <Text style={styles.subTitleText}>
          ${sub.price} per {sub.billingFrequency}
        </Text>
      </View>
      <View style={styles.items}>
        {renderItems()}
      </View>
      {renderDescription()}
      <TouchableOpacity onPress={() => selectSubscription(sub)}>
        <Text style={styles.subscribeButtonText}>
          Subscribe
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Subscription;
