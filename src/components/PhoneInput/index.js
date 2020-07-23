import React, { useState } from 'react';
import View from './view';
import { sendToken } from '../../lib/api';
import alert from '../../utils/alert';

const PhoneInput = props => {
  const [phoneNumber, setPhoneNumber] = useState('');

  function onTextChange(e) {
    setPhoneNumber(e);
  }

  async function pressHandler() {
    try {
      await sendToken({ phoneNumber });
      props.navigation.navigate('Activate');
    } catch(e) {
      alert('Error', e.message);
    }
  }

  return (
    <View
      pressHandler={pressHandler}
      onTextChange={onTextChange}
    />
  );
};

export default PhoneInput;
