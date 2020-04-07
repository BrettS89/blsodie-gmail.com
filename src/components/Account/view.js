import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Subscription from './components/Subscription';

const AccountView = ({ subscriptions }) => {
  function renderSubscriptions() {
    return subscriptions.map(s => (
      <Subscription
        key={s._id}
        sub={s}
      />
    ));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>
          Payment method
        </Text>
        <View style={styles.cardContainer}>
          <Icon name="credit-card" size={28} color={"grey"} style={styles.card}/>
          <Text style={styles.cardText}>
            Visa ending in 3811
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.replaceCard}>
            Replace card
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          Active subscriptions
        </Text>
        {renderSubscriptions()}
      </View>
    </ScrollView>
  );
};

export default AccountView;
