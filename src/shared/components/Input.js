import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

const Input = ({ labelText, value, onChangeText, placeholder, secureTextEntry, onSubmitHandler, email, clear, type, maxLength=50, newStyles }) => {

  const displayIcon = () => {
    if(labelText === 'email') {
      return <Icon name="user-circle" size={26} color="lightgray" />;
    }
    if(labelText === 'password') {
      return <Icon name="unlock-alt" size={28} color="lightgray" style={{ marginLeft: 2 }} />;
    }
    if(labelText === 'firstname') {
      return <Icon name="vcard-o" size={24} color="lightgray" />;
    }
    if(labelText === 'lastname') {
      return <Icon name="vcard-o" size={24} color="lightgray" />;
    }
    if (labelText === 'card') {
      return <Icon2 name="credit-card" size={24} color="lightgray" />;
    }
    if (labelText === 'date') {
      return <Icon2 name="calendar-alt" size={24} color="lightgray" style={{ marginLeft: 2 }} />;
    }
  };

  const renderKeyboardType = () => {
    if (type === 'email' || email) return 'email-address';
    if (type === 'number') return 'number-pad';
    return 'default';
  };

  const { label, textInput, container } = styles;
  return (
    <View style={[container]}>
      <View style={[styles.label, { flex: labelText ? 1 : 0 }]}>
        {displayIcon()}
      </View>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={[textInput, newStyles]}
        value={clear ? '' : value}
        keyboardType={renderKeyboardType()}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        autoCapitalize={'none'}
        underlineColorAndroid="transparent"
        onSubmitEditing={() => onSubmitHandler()}
        maxLength={maxLength}
      />
    </View>  
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1
  },
  textInput: {
    color: '#000',
    paddingRight: 3,
    fontSize: 15,
    flex: 5,
  },
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    marginBottom: 15
  }
});

export default Input;
