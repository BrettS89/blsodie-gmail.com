import { AsyncStorage } from 'react-native';
import { URI } from '../config';
import errorThrower from '../utils/errorThrower';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('no token');
  return token;
}

export async function login(body) {
  const res = await fetch(`${URI}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function register(body) {
  const res = await fetch(`${URI}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function isLoggedIn() {
  const res = await fetch(`${URI}/user/isloggedin`, {
    method: 'GET',
    headers: {
      authorization: await getToken(),
    }
  });

  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}
