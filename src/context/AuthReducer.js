import AuthAction from './AuthAction';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthAction.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case AuthAction.LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
