import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Button from '../../../shared/components/Button';

const SpotCard = ({ spot: { company }, goToSpot }) => {
  return (
    <View style={styles.SpotCard}>
      <Image source={{ uri: company.photo }} style={styles.photo} resizeMode="cover" />
      <View>
        <Text style={styles.text}>
          {company.name}
        </Text>
        <Button
          text="View Subscriptions"
          onPress={() => goToSpot(company._id)}
        />
      </View>
    </View>
  );
};

export default SpotCard;