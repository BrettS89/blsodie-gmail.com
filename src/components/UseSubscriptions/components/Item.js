import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import colors from '../../../shared/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Item = ({ item, openModal, subscriptionName, userSubscriptionId }) => {
  return (
    <View style={styles.Item}>
      <View style={styles.itemSection}>
        <Text style={styles.itemName}>
        {item.name}
        </Text>
      </View>
      <View style={[styles.itemSection, { alignItems: 'center' }]}>
        <Text style={styles.itemText}>
          {item.credits} remaining
        </Text>
      </View>
      <View style={[styles.itemSection, { alignItems: 'flex-end' }]}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => openModal(subscriptionName, item._id, item.credits, userSubscriptionId, item.name)}>
          <Icon name="stars" size={32} color={colors.main} />
          <Text style={{ fontSize: 11, color: colors.main, fontWeight: '500' }}>
            Redeem
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
