
import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

const LoadingModal = props => {
  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <Modal
      transparent 
      visible={isLoading} 
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <Spinner />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

export default LoadingModal;
