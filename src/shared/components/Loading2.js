import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

const LoadingModal = props => {
  const isLoading = useSelector(state => state.app.isLoading);

  if (!isLoading) return null;
  return (
    <View style={styles.modalContainer}>
      <Spinner />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'rgba(242, 241, 239, 0.2)',
  // },
  modalContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

export default LoadingModal;
