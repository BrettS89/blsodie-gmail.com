import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const ActivateView = props => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>

      <View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
      </View>

    </View>
  );
};

export default ActivateView;
