import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CREDIT_CARD, SET_SPOT_ID } from '../../redux/actions';
import View from './view';
import alert from '../../utils/alert';

const AddCreditCard = props => {
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  const dispatch = useDispatch();

  function navigate(screen) {
    props.navigation.navigate(screen);
  }

  function onSubmit() {
    const fields = [cardNumber, month, year, cvc];
    for (let f of fields) {
      if (!f) {
        alert('All fields must be included');
        return;
      }
    }

    const form = {
      cardNumber,
      cvc,
      date: `${month}/${year}`,
    };

    dispatch({ type: ADD_CREDIT_CARD, payload: { form, navigate } });
  }

  function onInputChange(type, e) {
    const val = e;
    if (type === 'cardNumber') {
      setCardNumber(val);
    } else if (type === 'month') {
      setMonth(val)
    } else if (type === 'year') {
      setYear(val)
    } else if (type === 'cvc') {
      setCvc(val);
    }
  }

  return (
    <View
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
};

export default AddCreditCard;
