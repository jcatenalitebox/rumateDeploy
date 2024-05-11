import { Box, styled } from '@mui/material';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes } from 'firebase/storage';

import { auth, db } from '../firebase';
import { storage } from '../firebase';

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
  const [uploadImage, setUploadImage] = React.useState(null);

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

  const handleUploadImage = async () => {
    if (uploadImage === null) return;
    const randomString = Math.random().toString(36).substring(2, 15); // Genera una cadena aleatoria de números y letras
    const storageRef = ref(storage, `images/${uploadImage.name}-${randomString}`);

    uploadBytes(storageRef, uploadImage).then(() => {
      // Vincular la url al usuario
    });
  };

  return (
    <div>
      <DummyForm>
        <input type='file' onChange={(e) => setUploadImage(e.target.files[0])} />
        <button onClick={handleUploadImage}>Upload Image</button>
        <form onSubmit={handleAdd}>
          <button type='submit'>Add Data</button>
        </form>
      </DummyForm>
    </div>
  );
};

export default DummyRegister;
