import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { verifyToken } from '../../lib/api';
import { SET_USER_DATA } from '../../redux/actions';
import alert from '../../utils/alert';

const Activate = props => {
  const dispatch = useDispatch();
  const app = useSelector(state => state.app);
  const spotId = useSelector(state => state.spots.spotId);
  const subscription = useSelector(state => state.subscription.subscription);
  let screen = 'Spots';
  if (spotId && app.navToSpot) screen = 'Spot';
  if (subscription) screen = 'ConfirmSubscription';

  const [token, setToken] = useState('');
  const inputArr = [];
  for (let i = 0; i < 6; i++) inputArr.push(useRef());

  useEffect(() => {
    // inputArr[0].current.focus();
    // inputArr[0].current.blur();

    setTimeout(() => {
      inputArr[0].current.focus();
    }, 100);
  }, []);

  function renderInputs() {
    return inputArr.map((inp, i) => {
      return (
        <View style={styles.inputBox} key={i}>
          <TextInput 
            ref={inp} 
            style={styles.input}
            keyboardType="number-pad"
            onKeyPress={e => onTextChange(e, i)}
            val={token[i]}
            maxLength={1}
          />
        </View>  
      );
    });
  }

  function ifBackSpace(i) {
    if (token[i]) {
      const newVal = token.slice(0, i);
      setToken(newVal);
    } else {
      const newVal = token.slice(0, i);
      inputArr[i - 1].current.focus();
      setToken(newVal);
    }
  }

  async function ifNumber(val) {
    setToken(token + val);
    const tok = token + val;
    if (tok.length === 6) {
      try {
        const { user } = await verifyToken({ token: tok });
        dispatch({ type: SET_USER_DATA, payload: user });
        props.navigation.navigate(screen);
      } catch(e) {
        alert('Error', e.message);
      }
    } else {
      inputArr[tok.length].current.focus();
    }
  }

  async function onTextChange(e, i) {
    const val = e.nativeEvent.key;
    if (val === 'Backspace') {
      ifBackSpace(i);
    } else {
      await ifNumber(val);
    }   
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        {renderInputs()}
      </View>
    </View>
  );
};

export default Activate;
