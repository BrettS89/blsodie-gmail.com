import { combineReducers } from 'redux';
import appReducer from './app';
import userReducer from './user';
import spotsReducer from './spots';
import subscriptionReducer from './subscription';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  spots: spotsReducer,
  subscription: subscriptionReducer,
});
