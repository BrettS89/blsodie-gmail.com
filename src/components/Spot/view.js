import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import Subscription from './components/Subscription';
import LoginModal from '../_modals/LoginModal';
import CreditCardModal from '../_modals/CreditCardModal';
import FreeBanner from '../FreeBanner';

const SpotView = ({ spot, selectSubscription }) => {
  function renderSubscriptions() {
    return spot.subscriptions.map(s => {
      return (
        <Subscription
          sub={s}
          key={s._id}
          selectSubscription={selectSubscription}
        />
      );
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <FreeBanner />
      <ScrollView style={styles.container}>
        <Image source={{ uri: spot.photo }} style={styles.photo} resizeMode="cover" />
        <Text style={styles.subscriptions}>
          Subscriptions
        </Text>
        {renderSubscriptions()}
        <LoginModal />
        <CreditCardModal />
      </ScrollView>
    </View>
  );
};

export default SpotView;
