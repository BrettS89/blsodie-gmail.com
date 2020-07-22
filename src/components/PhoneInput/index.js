import React, { useState } from 'react';
import View from './view';
import { sendToken } from '../../lib/api';

const PhoneInput = props => {
  const [phoneNumber, setPhoneNumber] = useState('');

  function onTextChange(e) {
    setPhoneNumber(e);
  }

  async function pressHandler() {
    const res = await sendToken({ phoneNumber });
    console.log(res);
  }

  return (
    <View
      pressHandler={pressHandler}
      onTextChange={onTextChange}
    />
  );
};

export default PhoneInput;
