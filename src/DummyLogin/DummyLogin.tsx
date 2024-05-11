import { Box, styled } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

import { AuthContext } from '@/context/AuthContext';

import { auth } from '../firebase';

const DummyForm = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const DummyLogin: React.FC = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { dispatch } = useContext<any>(AuthContext);

  const handleLogin = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        dispatch({ type: 'LOGIN', payload: user });
        setError('');
        router.push('/');
        // ...
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };

  return (
    <div>
      <DummyForm>
        <form onSubmit={handleLogin}>
          <input placeholder='username' type='email' onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Login</button>
          {!!error && <p>{error}</p>}
        </form>
      </DummyForm>
    </div>
  );
};

export default DummyLogin;
