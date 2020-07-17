import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../../../shared/components/Button';
import styles from '../styles';

const SpotCard = ({ spot: { company }, goToSpot }) => {
  const subscriptionText = company.subscriptions === 1
    ? 'subscription'
    : 'subscriptions';

  return (
    <View style={styles.SpotCard}>
      <Image source={{ uri: company.photo }} style={styles.photo} resizeMode="cover" />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>
            {company.name}
          </Text>
          <Text>
            {company.subscriptions} {subscriptionText}
          </Text>
        </View>
        {/* <TouchableOpacity onPress={() => goToSpot(company._id)}>
          <Text style={styles.buttonText}>
            View subscriptions
          </Text>
        </TouchableOpacity> */}
        <Button
          text="View subscriptions"
          onPress={() => goToSpot(company._id)}
          textStyle={{ fontSize: 14 }}
          buttonStyle={{ height: 37 }}
        />
      </View>
    </View>
  );
};

export default SpotCard;