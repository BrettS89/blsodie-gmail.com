import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';

const ConfirmView = ({ subscription, subscription: { company }, subscribe, firstSubscription }) => {
  function renderFreeSubscription() {
    if (firstSubscription) {
      return (
        <Text style={styles.freeText}>
          The first {subscription.billingFrequency} of this subscription is free. You can cancel this subscription at any time before the next billing cycle.
        </Text>
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: company.photo }}
          style={styles.photo}
          resizeMode="cover"
        />
        <Text style={[styles.text, { fontWeight: '700', fontSize: 18 }]}>
          {company.name}
        </Text>
        <Text style={styles.text}>
          {subscription.name} subscription
        </Text>
        <Text style={styles.text}>
          ${subscription.price.toFixed(2)} / {subscription.billingFrequency}
        </Text>
        {renderFreeSubscription()}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Confirm Subscription"
          onPress={subscribe}
        />
      </View>
    </View>
  );
};

export default ConfirmView;
