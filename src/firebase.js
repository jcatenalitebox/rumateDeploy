// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: 'rumate-1389f.firebaseapp.com',
  projectId: 'rumate-1389f',
  storageBucket: 'rumate-1389f.appspot.com',
  messagingSenderId: '1057023718151',
  appId: '1:1057023718151:web:891ebe21ce865e8d518ba2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
