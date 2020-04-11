import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Subscription from './components/Subscription';
import CancelModal from './components/CancelModal';

const AccountView = ({ subscriptions, user, cancelSubscription, modalOpen, closeModal, openModal, navigate }) => {
  const addCardText = user.stripeId
    ? 'Replace card'
    : 'Add card';

  const cardOnFileText = user.stripeId
    ? `${user.cardType} ending in ${user.cardLast4}`
    : 'No card on file';

  function renderSubscriptions() {
    return subscriptions.map(s => (
      <Subscription
        key={s._id}
        sub={s}
        openModal={openModal}
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
            {cardOnFileText}
          </Text>
        </View>
        <View style={{ alignItems: 'flex-start', marginTop: 10 }}>
          <Button text={addCardText} onPress={() => navigate('AddCreditCard')}/>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>
          Active subscriptions
        </Text>
        {renderSubscriptions()}
      </View>
      <CancelModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        cancelSubscription={cancelSubscription}
      /> 
    </ScrollView>
  );
};

export default AccountView;
