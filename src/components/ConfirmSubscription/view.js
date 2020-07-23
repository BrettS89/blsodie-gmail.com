import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';

const ConfirmView = ({ subscription, subscription: { company }, subscribe, firstSubscription, userActivated, verifyMobileNumber }) => {
  function renderFreeSubscription() {
    if (firstSubscription && userActivated) {
      return (
        <Text style={styles.freeText}>
          The first {subscription.billingFrequency} of this subscription is free. You can cancel this subscription at any time before the next billing cycle.
        </Text>
      );
    } else if (firstSubscription && !userActivated) {
      return (
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.freeText}>
            The first {subscription.billingFrequency} of this subscription will be free if you verify your mobile number before confirming your subscription.
          </Text>
          <TouchableOpacity style={styles.verifyButton} onPress={verifyMobileNumber}>
            <Text style={styles.verifyText}>
              Verify mobile number
            </Text>
          </TouchableOpacity>
        </View>
      )
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
