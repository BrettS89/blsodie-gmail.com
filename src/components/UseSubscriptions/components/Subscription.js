import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Item from './Item';

const Subscription = ({ sub, openModal }) => {
  function renderItems() {
    return sub.items.map(i => (
      <Item
        key={i._id}
        item={i}
        openModal={openModal}
      />
    ));
  }

  return (
    <View>
      <View style={styles.subTitle}>
        <Text style={styles.subTitleText}>
          {sub.name}
        </Text>
      </View>
      <View style={styles.itemsContainer}>
      {renderItems()}
      </View>
    </View>
  );
};

export default Subscription;
