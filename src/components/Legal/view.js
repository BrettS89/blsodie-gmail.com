import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const LegalView = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('TermsAndConditions')}
      >
        <Text style={styles.buttonText}>
          Terms and conditions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => navigate('PrivacyPolicy')}
      >
        <Text style={styles.buttonText}>
          Privacy policy
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LegalView;
