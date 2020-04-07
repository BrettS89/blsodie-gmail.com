import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Button from '../../../shared/components/Button';

export default function CancelMoal({ modalIsOpen, closeModal, cancelSubscription }) {
  return (
    <Modal
      visible={modalIsOpen}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>
            Are you sure you want to cancel this subscription?
          </Text>

          <Button
            text="Yes"
            buttonStyle={{ width: 150, marginBottom: 16 }}
            onPress={cancelSubscription}
          />

          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.noThanksText}>
              Cancel
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}