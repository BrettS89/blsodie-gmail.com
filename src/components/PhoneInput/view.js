import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';

const PhoneInputView = ({ pressHandler, onTextChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter your phone number
      </Text>

        <View style={{ width: '80%', alignItems: 'center', marginBottom: 30 }}>
          <Input
            placeholder="Phone number"
            type="number"
            newStyles={{ fontSize: 24, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
            onChangeText={onTextChange}
          />
        </View>

        <Button text="Send verification code" onPress={pressHandler} />

    </View>
  );
};

export default PhoneInputView;
