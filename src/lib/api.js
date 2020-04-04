import { URI } from '../config';
import errorThrower from '../utils/errorThrower';

function getToken() {

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
