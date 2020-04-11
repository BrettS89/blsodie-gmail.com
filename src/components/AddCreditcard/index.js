import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CREDIT_CARD, SET_SPOT_ID } from '../../redux/actions';
import View from './view';

const AddCreditCard = props => {
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  function navigate() {

  }

  function onInputChange(type, e) {
    const val = e.target.value;
    if (type === 'cardNumber') {
      setCardNumber(val);
    } else if (type === 'date') {
      setDate(val)
    } else if (type === 'cvc') {
      setCvc(val);
    }
  }

  return (
    <View />
  );
};

export default AddCreditCard;
