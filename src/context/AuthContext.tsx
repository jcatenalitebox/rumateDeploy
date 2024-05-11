import { createContext, useEffect, useReducer, useState } from 'react';

import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  currentUser: null,
};

export const AuthContext = createContext<any>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const [localUser, setLocalUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    setLocalUser(user);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser || localUser,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
