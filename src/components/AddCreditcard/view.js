import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Input from '../../shared/components/Input';

const AddCreditCardView = ({ onInputChange, onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            name="card"
            labelText="card"
            type="cc-number"
            placeholder="Card number"
            onChangeText={card => onInputChange('cardNumber', card)}
            onSubmitHandler={() => {}}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="month"
            labelText="date"
            placeholder="Expiration month MM"
            type="number"
            onChangeText={month => onInputChange('month', month)}
            onSubmitHandler={() => {}}
            maxLength={2}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="year"
            labelText="date"
            placeholder="Expiration Year YY"
            type="number"
            onChangeText={year => onInputChange('year', year)}
            onSubmitHandler={() => {}}
            maxLength={2}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="password"
            labelText="password"
            placeholder="CVC"
            type="number"
            onChangeText={cvc => onInputChange('cvc', cvc)}
            onSubmitHandler={() => {}}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>
            Add card
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default AddCreditCardView;
