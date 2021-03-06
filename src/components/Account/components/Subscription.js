import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Subscription = ({ sub, sub: { _id, company, subscription }, openModal }) => {
  const billMessage = subscription.billingFrequency === 'week'
    ? `Subscription billed and refreshed every ${sub.billOn}`
    : `Subscription billed and refreshd on the ${sub.billOn} of the month`;

  return (
    <View style={styles.Subscription}>
      <Image
        source={{ uri: company.photo }}
        style={styles.photo}
        resizeMode="cover"
      />
      <Text style={styles.subText}>
        {company.name} {subscription.name}
      </Text>
      <Text style={styles.subText}>
        ${subscription.price.toFixed(2)} / {subscription.billingFrequency}
      </Text>
      <Text style={styles.subText}>
        {billMessage}
      </Text>
      <TouchableOpacity onPress={() => openModal(_id)}>
        <Text style={[styles.subText, { color: 'red' }]}>
          Cancel subscription
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Subscription;
