import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { db, auth, storage } from '../firebase';

import { AuthAction } from './enum';
import { AUTH_SUCCESS_MESSAGE, UPLOAD_SUCCESS_MESSAGE } from './constants';

export const registerUser = async (userData: any) => {
  const { email, password } = userData;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      const docRef = await addDoc(collection(db, 'users'), {
        uid: user.uid,
        ...userData,
        timestamp: serverTimestamp(),
      });

      return { success: true, docRef };
    }

    return { success: false };
  } catch (error) {
    return { success: false, error };
  }
};

export const uploadImage = async (imageFile: any) => {
  if (imageFile === null) return;

  const randomString = Math.random().toString(36).substring(2, 15);
  const storageRef = ref(storage, `images/${imageFile.name.replace(/\s/g, '-')}-${randomString}`);

  try {
    await uploadBytes(storageRef, imageFile);

    return { success: true, message: UPLOAD_SUCCESS_MESSAGE };
  } catch (error) {
    return { success: false, message: error };
  }
};

export const signIn = async (email: string, password: string, dispatch: any) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    dispatch({ type: AuthAction.LOGIN, payload: user });

    return { success: true, message: AUTH_SUCCESS_MESSAGE };
  } catch (error) {
    return { success: false, error };
  }
};
