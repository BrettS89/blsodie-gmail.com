import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../lib/api';
import { spotIdState, appState } from '../selectors';
import alert from '../../utils/alert';

export default [
  registerWatcher,
  loginWatcher,
  isLoggedInWatcher,
  addCreditCardWatcher,
  logoutWatcher,
];

function * isLoggedInWatcher() {
  yield takeLatest(actions.CHECK_IS_LOGGED_IN, isLoggedInHandler)
}

function * registerWatcher() {
  yield takeLatest(actions.ON_REGISTER, registerHandler);
}

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * addCreditCardWatcher() {
  yield takeLatest(actions.ADD_CREDIT_CARD, addCreditCardHandler);
}

function * logoutWatcher() {
  yield takeLatest(actions.LOGOUT, logoutHandler);
}

function * isLoggedInHandler({ payload }) {
  const freeBanner = yield AsyncStorage.getItem('showFreeBanner');
  const freeBannerLocalStorage = freeBanner === 'false';
  console.log(freeBannerLocalStorage);
  try {
    var { user } = yield call(api.isLoggedIn);
    yield put({ type: actions.SET_USER_DATA, payload: user });
    yield put({ type: actions.GET_CREDITS });
    const { locations } = yield call(api.getSpots, {});
    yield put({ type: actions.SET_SPOTS, payload: locations });
    payload('success');
  } catch(e) {
    payload('failure');
    yield AsyncStorage.removeItem('token');
    user = { firstSubscription: true };
    const { locations } = yield call(api.getSpots, {});
    yield put({ type: actions.SET_SPOTS, payload: locations });
    console.log('isLoggedInHandler error', e);
  }
  const hideFreeBanner = freeBannerLocalStorage || !user.firstSubscription;
  if (hideFreeBanner) {
    yield put({ type: actions.CLOSE_FREE_BANNER }); 
  } else {
    yield put({ type: actions.SHOW_FREE_BANNER });
  }
}

function * registerHandler({ payload: { form, navigate } }) {
  try {
    let screen = 'Spots';
    yield put({ type: actions.APP_IS_LOADING });
    yield put({ type: actions.SET_REGISTRATION_ERROR, payload: null });
    const { token, user } = yield call(api.register, form);
    AsyncStorage.setItem('token', token);
    yield put({ type: actions.SET_USER_DATA, payload: user });
    const { locations } = yield call(api.getSpots, {});
    yield put({ type: actions.SET_SPOTS, payload: locations });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    const spotId = yield select(spotIdState);
    const app = yield select(appState);
    if (spotId && app.navToSpot) screen = 'Spot';
    navigate(screen);
    yield put({ type: actions.SET_NAV_TO_SPOT, payload: false });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    yield put({ type: actions.SET_REGISTRATION_ERROR, payload: e.message });
    console.log('registerHandler error: ', e.message);
  }
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    let screen = 'Spots';
    yield put({ type: actions.APP_IS_LOADING });
    yield put({ type: actions.SET_LOGIN_ERROR, payload: null });
    const { token, user } = yield call(api.login, form);
    const freeBanner = yield AsyncStorage.getItem('showFreeBanner');
    const freeBannerLocalStorage = freeBanner === 'false';
    const hideFreeBanner = freeBannerLocalStorage || !user.firstSubscription;
    if (hideFreeBanner) {
      yield put({ type: actions.CLOSE_FREE_BANNER }); 
    } else {
      yield put({ type: actions.SHOW_FREE_BANNER });
    }
    yield AsyncStorage.setItem('token', token);
    yield put({ type: actions.GET_CREDITS });
    yield put({ type: actions.SET_USER_DATA, payload: user });
    const { locations } = yield call(api.getSpots, {});
    yield put({ type: actions.SET_SPOTS, payload: locations });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    const spotId = yield select(spotIdState);
    const app = yield select(appState);
    if (spotId && app.navToSpot) screen = 'Spot';
    navigate(screen);
    yield put({ type: actions.SET_NAV_TO_SPOT, payload: false });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    yield put({ type: actions.SET_LOGIN_ERROR, payload: e.message });
    console.log('loginHandler error: ', e);
  }
}

function * addCreditCardHandler({ payload: { form, navigate } }) {
  try {
    let screen = 'Account';
    yield put({ type: actions.APP_IS_LOADING });
    const { user } = yield call(api.addCreditCard, form);
    yield put({ type: actions.SET_USER_DATA, payload: user });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    const spotId = yield select(spotIdState);
    const app = yield select(appState);
    if (spotId && app.navToSpot) screen = 'Spot';
    navigate(screen);
    yield put({ type: actions.SET_NAV_TO_SPOT, payload: false });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert('Error', e.message);
    console.log('addCreditCardHandler error: ', e);
  }
}

function * logoutHandler({ payload }) {
  try {
    yield AsyncStorage.clear();
    payload('Login');
    yield put({ type: 'RESET' });
  } catch(e) {
    console.log('logoutHandler error: ', e);
  }
}
