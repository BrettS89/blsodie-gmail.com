import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';
import { userSubscriptionsState, creditsState } from '../selectors';
import dalert from '../../utils/alert';

export default [
  // getSubscriptionsWatcher,
  subscribeWatcher,
  // getUserSubscriptionsWatcher,
  // cancelUserSubscriptionWatcher,
  getCreditsWatcher,
  // useCreditWatcher,
];

function * subscribeWatcher() {
  yield takeLatest(actions.SUBSCRIBE, subscribeHandler);
}

function * getCreditsWatcher() {
  yield takeLatest(actions.GET_CREDITS, getCreditsHandler);
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
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_IS_NOT_LOADING });
    console.log('subscribeHandler error: ', e);
    dalert('Error', e.message);
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
