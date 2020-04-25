import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import colors from '../../../shared/styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const Item = ({ item, openModal, subscriptionName, userSubscriptionId }) => {
  return (
    <View style={styles.Item}>
      <View style={styles.itemSection}>
        <Text style={styles.itemText}>
        {item.name}
        </Text>
      </View>
      <View style={[styles.itemSection, { alignItems: 'center' }]}>
        <Text style={styles.itemText}>
          {item.credits} remaining
        </Text>
      </View>
      <View style={[styles.itemSection, { alignItems: 'flex-end' }]}>
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => openModal(subscriptionName, item._id, item.credits, userSubscriptionId)}>
          <Icon name="star" size={28} color={colors.main} />
          <Text style={{ fontSize: 11, color: colors.main, fontWeight: '500' }}>
            Redeem
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
