import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { ON_REGISTER } from '../../redux/actions';

const Register = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  function onTextChange (val, type) {
    if (type === 'email') {
      setEmail(val);
    } else if (type === 'password') {
      setPassword(val);
    }
  }

  function onRegister () {
    const form = {
      email,
      password,
    };

    dispatch({ type: ON_REGISTER, payload: { form, navigate } });
  }

  function navigate (screen) {
    props.navigation.navigate(screen);
  }

  function toLogin () {
    props.navigation.navigate('Login');
  }

  return (
    <View
      onTextChange={onTextChange}
      onRegister={onRegister}
      error={user.registrationError}
      toLogin={toLogin}
      navigate={navigate}
    />
  );
};

export default Register;
