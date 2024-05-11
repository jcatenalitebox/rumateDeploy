import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: 'rumate-1389f.firebaseapp.com',
  projectId: 'rumate-1389f',
  storageBucket: 'rumate-1389f.appspot.com',
  messagingSenderId: '1057023718151',
  appId: '1:1057023718151:web:891ebe21ce865e8d518ba2',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
