import { Box, styled } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { db, auth } from '../firebase';

const DummyForm = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const DummyUserData = {
  name: 'John Doe',
  edad: '30',
  genre: 'female',
  ocupation: 'developer',
  kids: 'yes-visit',
  ratingWithOthers: true,
  email: 'johnDoe@gmail.com',
  password: 'Litebox1234',
};

const DummyRegister: React.FC = () => {
  const handleAdd = async (e: any) => {
    e.preventDefault();
    // Add your code here

    try {
      await createUserWithEmailAndPassword(auth, DummyUserData.email, DummyUserData.password);
      await addDoc(collection(db, 'users'), {
        ...DummyUserData,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <DummyForm>
        <form onSubmit={handleAdd}>
          <button type='submit'>Add Data</button>
        </form>
      </DummyForm>
    </div>
  );
};

export default DummyRegister;
