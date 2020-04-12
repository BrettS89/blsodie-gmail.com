import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_CREDIT_CARD } from '../../redux/actions';
import View from './view';
import alert from '../../utils/alert';

const AddCreditCard = props => {
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');

  const dispatch = useDispatch();
  let backHandler = null;

  useEffect(() => {
    backHandler = BackHandler.addEventListener('hardwareBackPress', backPress);

    return () => {
      backHandler.remove();
    };
  }, []); 

  function navigate(screen) {
    props.navigation.navigate(screen);
  }

  function backPress() {
    props.navigation.navigate('Account');
    return true;
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
