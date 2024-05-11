import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { db, auth } from '../firebase';

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

export const uploadImage = async (imageFile: any, imageName: string) => {
  if (imageFile === null) return;

  const randomString = Math.random().toString(36).substring(2, 15);
  const storageRef = ref(imageFile, `images/${imageName.replace(/\s/g, '-')}-${randomString}`);

  try {
    await uploadBytes(storageRef, imageFile);

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export const signIn = async (email: string, password: string, dispatch: any) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    dispatch({ type: 'LOGIN', payload: user });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
