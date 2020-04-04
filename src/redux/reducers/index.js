import { combineReducers } from 'redux';
import appReducer from './app';
import userReducer from './user';
import spotsReducer from './spots';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  spots: spotsReducer,
});
