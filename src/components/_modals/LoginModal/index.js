import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { CLOSE_LOGIN_MODAL } from '../../../redux/actions';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import Button from '../../../shared/components/Button';

const LoginModal = props => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.app.loginModalOpen);

  function closeModal() {
    dispatch({ type: CLOSE_LOGIN_MODAL });
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
          <View style={styles.exit}>
            <TouchableOpacity onPress={closeModal}>
              <Icon name="cross" size={32} />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalTitle}>
            You need to be logged in to purchase a subscription
          </Text>

          <Button
            text="Login"
            onPress={() => navigate('Login')}
            buttonStyle={{ width: 150, marginBottom: 16 }}
            textStyle={{ fontSize: 15 }}
          />

          <TouchableOpacity onPress={() => navigate('Register')}>
            <Text style={styles.noThanksText}>
              Sign up
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default withNavigation(LoginModal);
