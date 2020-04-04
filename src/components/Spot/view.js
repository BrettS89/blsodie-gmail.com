import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import Subscription from './components/Subscription';

const SpotView = ({ spot }) => {
  function renderSubscriptions() {
    return spot.subscriptions.map(s => {
      return (
        <Subscription sub={s} key={s._id} />
      );
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: spot.photo }} style={styles.photo} resizeMode="cover" />
      <Text style={styles.title}>
        {spot.name}
      </Text>
      <Text style={styles.subscriptions}>
        Subscriptions
      </Text>
      {renderSubscriptions()}
      {/* <FlatList
        data={spot.subscriptions}
        keyExtractor={sub => sub._id}
        showsVerticalScrollIndicator={false}
        renderItem={s => (
          <Subscription
            sub={s.item}
          />
        )}
      /> */}
    </ScrollView>
  );
};

export default SpotView;
