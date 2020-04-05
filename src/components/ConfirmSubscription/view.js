import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';

const ConfirmView = ({ subscription, subscription: { company }, subscribe }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{ uri: company.photo }}
          style={styles.photo}
          resizeMode="cover"
        />
        <Text style={styles.text}>
          {company.name}
        </Text>
        <Text style={styles.text}>
          {subscription.name} subscription
        </Text>
        <Text style={styles.text}>
          ${subscription.price} / {subscription.billingFrequency}
        </Text>
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <Button
          text="Confirm Subscription"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={subscribe}
        />
      </SafeAreaView>
    </View>
  );
};

export default ConfirmView;
