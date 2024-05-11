import { Box, styled } from '@mui/material';
import React from 'react';

import { registerUser, uploadImage } from '../../lib/firebase/actions';

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
  const [uploadedImage, setUploadedImage] = React.useState(null);

  const handleAdd = async (e: any) => {
    e.preventDefault();
    // Add your code here

    registerUser(DummyUserData).then((res) => {
      console.log({ res });
    });
  };

  const handleUploadImage = async () => {
    uploadImage(uploadedImage).then((res) => {
      console.log({ res });
    });
  };

  return (
    <div>
      <DummyForm>
        <input type='file' onChange={(e) => setUploadedImage(e.target.files[0])} />
        <button onClick={handleUploadImage}>Upload Image</button>
        <form onSubmit={handleAdd}>
          <button type='submit'>Add Data</button>
        </form>
      </DummyForm>
    </div>
  );
};

export default DummyRegister;
