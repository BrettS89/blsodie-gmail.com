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

export async function getSpots(data) {
  const res = await fetch(`${URI}/location/get`);
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getOneSpot(id) {
  const res = await fetch(`${URI}/company/getone/${id}`);
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getSubscription(id) {
  const res = await fetch(`${URI}/subscription/get/${id}`);
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function subscribe(body) {
  const res = await fetch(`${URI}/usersubscription/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getCredits() {
  const res = await fetch(`${URI}/credit/get`, {
    headers: {
      'authorization': await getToken(),
    }
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function useCredit(id) {
  const res = await fetch(`${URI}/credit/use/${id}`, {
    method: 'PATCH',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getUserSubscriptions() {
  const res = await fetch(`${URI}/usersubscription/get`, {
    method: 'GET',
    headers: {
      'authorization': await getToken(),
    }
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function cancelUserSubscription(id) {
  const res = await fetch(`${URI}/usersubscription/cancel/${id}`, {
    method: 'PATCH',
    headers: {
      'authorization': await getToken(),
      'Content-Type': 'application/json',
    },
  });

  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}