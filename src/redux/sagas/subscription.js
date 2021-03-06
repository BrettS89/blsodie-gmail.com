import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';
import { userSubscriptionsState, creditsState } from '../selectors';
import alert from '../../utils/alert';

export default [
  // getSubscriptionsWatcher,
  subscribeWatcher,
  getUserSubscriptionsWatcher,
  cancelUserSubscriptionWatcher,
  getCreditsWatcher,
  useCreditWatcher,
];

function * subscribeWatcher() {
  yield takeLatest(actions.SUBSCRIBE, subscribeHandler);
}

function * getCreditsWatcher() {
  yield takeLatest(actions.GET_CREDITS, getCreditsHandler);
}

function * useCreditWatcher() {
  yield takeLatest(actions.USE_CREDIT, useCreditHandler);
}

function * getUserSubscriptionsWatcher() {
  yield takeLatest(actions.GET_USER_SUBSCRIPTIONS, getUserSubscriptionsHandler);
}

function * cancelUserSubscriptionWatcher() {
  yield takeLatest(actions.CANCEL_USER_SUBSCRIPTION, cancelUserSubscriptionHandler);
}

function * subscribeHandler({ payload: { data, navigate } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const userSubscriptions = yield select(userSubscriptionsState);
    const { userSubscription } = yield call(api.subscribe, data);
    let userSubs;
    if (userSubscriptions) {
      userSubs = [...userSubscriptions, userSubscription];
    } else {
      userSubs = [userSubscription];
    }
    yield put({ type: actions.SET_USER_SUBSCRIPTIONS, payload: userSubs });
    const { subscriptions } = yield call(api.getCredits);
    yield put({ type: actions.SET_CREDITS, payload: subscriptions });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    yield put({ type: actions.CLOSE_FREE_BANNER });
    yield put({ type: actions.SET_FIRST_SUB_FALSE });
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('subscribeHandler error: ', e);
    alert('Error', e.message);
  }
}

function * getCreditsHandler() {
  try {
    const { subscriptions } = yield call(api.getCredits);
    yield put({ type: actions.SET_CREDITS, payload: subscriptions });
  } catch(e) {
    console.log('getCreditsHandler error: ', e);
  }
}

function * useCreditHandler({ payload: { subscriptionName, itemId, closeModal, userSubscriptionId } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const data = { itemId, userSubscriptionId };
    yield call(api.useCredit, data);
    const credits = yield select(creditsState);
    const subscriptions = _.cloneDeep(credits);

    subscriptions.forEach(s => {
      if (s.name === subscriptionName) {
        s.items.forEach(i => {
          if (i._id === itemId) {
            i.credits--;
          }
        });
      }
    });

    yield put({ type: actions.SET_CREDITS, payload: subscriptions });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    closeModal();
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    alert('Error', e.message);
    console.log('useCreditHandler', e);
  }
}

function * getUserSubscriptionsHandler() {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const { subscriptions } = yield call(api.getUserSubscriptions);
    yield put({ type: actions.SET_USER_SUBSCRIPTIONS, payload: subscriptions });
    yield put({ type: actions.APP_IS_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('getUserSubscriptionsHandler error', e.message);
  }
}

function * cancelUserSubscriptionHandler({ payload: { userSubscriptionId, closeModal } }) {
  try {
    yield put({ type: actions.APP_IS_LOADING });
    const { _id } = yield call(api.cancelUserSubscription, userSubscriptionId);
    const userSubscriptions = yield select(userSubscriptionsState);
    const filteredUserSubscriptions = userSubscriptions.filter(s => {
      return s._id !== _id;
    });
    yield put({ type: actions.SET_USER_SUBSCRIPTIONS, payload: filteredUserSubscriptions });
    yield put({ type: actions.GET_CREDITS });
    yield put({ type: actions.APP_IS_NOT_LOADING });
    closeModal();
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('cancelUserSubscriptionHandler error: ', e);
    alert('Error', e.message);
  }
}
