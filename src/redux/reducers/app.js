import { APP_IS_LOADING, APP_IS_NOT_LOADING, OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL, OPEN_CREDIT_CARD_MODAL, CLOSE_CREDIT_CARD_MODAL, SET_NAV_TO_SPOT } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  loginModalOpen: false,
  creditCardModalOpen: false,
  navToSpot: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case APP_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case APP_IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        loginModalOpen: true,
        navToSpot: true,
      };

    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginModalOpen: false,
      };

    case OPEN_CREDIT_CARD_MODAL:
      return {
        ...state,
        creditCardModalOpen: true,
        navToSpot: true,
      };

    case CLOSE_CREDIT_CARD_MODAL:
      return {
        ...state,
        creditCardModalOpen: false,
      };
    
    case SET_NAV_TO_SPOT:
      return {
        ...state,
        navToSpot: payload,
      };

    default:
      return state;
  }
};
