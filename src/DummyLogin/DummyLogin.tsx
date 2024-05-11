import { Box, styled } from '@mui/material';
import React, { useContext, useState } from 'react';

import { AuthContext } from '@/context/AuthContext';

import { signIn } from '../../lib/firebase/actions';

const DummyForm = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const DummyLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext<any>(AuthContext);

  const handleLogin = (e: any) => {
    e.preventDefault();

    signIn(email, password, dispatch).then((res) => {
      console.log({ res });
    });
  };

  return (
    <div>
      <DummyForm>
        <form onSubmit={handleLogin}>
          <input placeholder='username' type='email' onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit'>Login</button>
        </form>
      </DummyForm>
    </div>
  );
};

export default DummyLogin;
