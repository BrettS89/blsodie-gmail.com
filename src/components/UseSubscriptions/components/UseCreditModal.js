import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Button from '../../../shared/components/Button';

export default function insufficientTokensView({ modalIsOpen, closeModal, useCredit, itemName }) {
  return (
    <Modal
      visible={modalIsOpen}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>
            {`Are you sure you want to redeem one ${itemName}?`}
          </Text>

          <Button
            text="Yes"
            buttonStyle={{ width: 150, marginBottom: 16 }}
            onPress={useCredit}
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