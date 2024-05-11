import { collection, addDoc, serverTimestamp, getDocs, doc, getDoc } from 'firebase/firestore';
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

export const getAllUsers = async () => {
  let list: any = [];

  try {
    const querySnapshot = await getDocs(collection(db, 'users'));

    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: list };
  } catch (error) {
    return { success: false, error };
  }
};

export const getUserById = async (id: any) => {
  try {
    const docRef = await doc(db, 'users', id);
    const docSnap = await getDoc(docRef);

    return { success: true, data: docSnap.data() };
  } catch (error) {
    return { success: false, error };
  }
};
