import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Input from '../../shared/components/Input';

const AddCreditCardView = ({ setCard, setMonth, setYear, setCvc, onSubmit }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>
        Add payment method
      </Text> */}

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            name="card"
            labelText="card"
            type="number"
            placeholder="Card number"
            onChangeText={card => setCard(card)}
            onSubmitHandler={onSubmit}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="month"
            labelText="date"
            placeholder="Expiration month"
            type="number"
            onChangeText={month => setMonth(month)}
            onSubmitHandler={onSubmit}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="year"
            labelText="date"
            placeholder="Expiration Year"
            type="number"
            onChangeText={year => setYear(year)}
            onSubmitHandler={onSubmit}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            name="password"
            labelText="password"
            placeholder="CVC"
            type="number"
            onChangeText={cvc => setCvc(cvc)}
            onSubmitHandler={onSubmit}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Add card
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default AddCreditCardView;
