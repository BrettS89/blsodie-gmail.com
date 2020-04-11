import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { CLOSE_CREDIT_CARD_MODAL } from '../../../redux/actions';

import styles from './styles';
import Button from '../../../shared/components/Button';

const LoginModal = props => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.app.creditCardModalOpen);

  function closeModal() {
    dispatch({ type: CLOSE_CREDIT_CARD_MODAL });
  }

  function navigate(screen) {
    props.navigation.navigate(screen);
    closeModal();
  }

  return (
    <Modal
      visible={modalOpen}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>
            You need a credit card on file to purchase a subscription
          </Text>

          <Button
            text="Add credit card"
            onPress={() => navigate('AddCreditCard')}
            buttonStyle={{ marginBottom: 16 }}
            textStyle={{ fontSize: 15 }}
          />

          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.noThanksText}>
              Maybe later
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default withNavigation(LoginModal);
