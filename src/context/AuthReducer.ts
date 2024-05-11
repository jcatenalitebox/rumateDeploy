import { AuthAction } from '../../lib/firebase/enum';

const AuthReducer = (state: any, action: { type: any; payload: any }) => {
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
