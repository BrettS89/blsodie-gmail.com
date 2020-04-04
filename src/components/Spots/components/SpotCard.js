import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Button from '../../../shared/components/Button';

const SpotCard = ({ spot: { company } }) => {
  return (
    <View style={styles.SpotCard}>
      <Image source={{ uri: company.photo }} style={styles.photo} />
      <View>
        <Text style={styles.text}>
          {company.name}
        </Text>
        <Button
          text="View Subscriptions"
        />
      </View>
    </View>
  );
};

export default SpotCard;