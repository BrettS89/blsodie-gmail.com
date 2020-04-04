import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../lib/api';

export default [
  registerWatcher,
];

function * registerWatcher() {
  yield takeLatest('placeholder', registerHandler);
}

function * registerHandler({ payload }) {
  try {
    yield 'hi';
  } catch(e) {
    console.log('registerHandler error: ', e);
  }
}
