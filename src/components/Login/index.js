import React, { useEffect, useState } from 'react';
import { SplashScreen } from 'expo';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { ON_LOGIN } from '../../redux/actions';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  function onTextChange (val, type) {
    if (type === 'email') {
      setEmail(val);
    } else if (type === 'password') {
      setPassword(val);
    }
  }

  function onLogin () {
    const form = {
      email,
      password,
    };

    dispatch({ type: ON_LOGIN, payload: { form, navigate } });
  }

  function navigate (screen) {
    props.navigation.navigate(screen);
  }

  function goRegister () {
    props.navigation.navigate('Register');
  }

  return (
    <View
      onTextChange={onTextChange}
      onLogin={onLogin}
      error={user.loginError}
      goRegister={goRegister}
      navigate={navigate}
    />
  );
};

export default Login;
