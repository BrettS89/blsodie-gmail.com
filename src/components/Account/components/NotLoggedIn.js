import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Button from '../../../shared/components/Button';

const NotLoggedInView = ({ navigate }) => {
  return (
    <View style={styles.NotLoggedInView}>
      <Text style={styles.title}>
        You're not currently logged in
      </Text>
      <Button
        text="Login"
        onPress={() => navigate('Login')}
        buttonStyle={{ width: 150 }}
        textStyle={{ fontSize: 15 }}
      />
      <Text style={styles.or}>
        Or
      </Text>
      <TouchableOpacity onPress={() => navigate('Register')}>
        <Text style={[styles.replaceCard, { fontWeight: '700' }]}>
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotLoggedInView;
