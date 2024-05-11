import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  query,
  where,
} from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { db, auth, storage } from '../firebase';

import { ADITIONAL_PROPERTIES, AuthAction } from './enum';
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

      const docSnap = await getDoc(docRef);

      localStorage.setItem('user', JSON.stringify(docSnap.data()));

      return { success: true, data: docSnap.data() };
    }

    // TODO: Preguntar si el usuario está en localstorage, si no está, lo guardo

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

    return { success: true, message: UPLOAD_SUCCESS_MESSAGE, data: storageRef.fullPath };
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

export const getUsersByRole = async (userRole: string) => {
  let list: any = [];

  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('userRole', '==', userRole));
    const querySnapshot = await getDocs(q);

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

export const getUserByEmail = async (email: string) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, error: 'No user found' };
    } else {
      const user = querySnapshot.docs[0];
      return { success: true, data: { id: user.id, userRole: user.data().userRole } };
    }
  } catch (error) {
    return { success: false, error };
  }
};

export const addRuMatch = async (id: any, newRuMatch: string) => {
  try {
    const docRef = doc(db, 'users', id);

    await updateDoc(docRef, { rumatches: arrayUnion(newRuMatch) });

    return { success: true, message: 'Match added successfully' };
  } catch (error) {
    return { success: false, error };
  }
};

export const getRuMatches = async (id: any) => {
  try {
    const docRef = await doc(db, 'users', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return { success: false, error: 'No user found' };
    const rumatches = docSnap.data().rumatches;

    const users = [];

    if (!rumatches) return;
    for (const id of rumatches) {
      const userDocRef = doc(db, 'users', id);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        users.push(userDocSnap.data());
      }
    }

    return { success: true, data: users };
  } catch (error) {
    return { success: false, error };
  }
};

const PROPS = [
  ADITIONAL_PROPERTIES.CLEANLINESS,
  ADITIONAL_PROPERTIES.LGBTIQFRIENDLY,
  ADITIONAL_PROPERTIES.MUSICIANFRIENDLY,
  ADITIONAL_PROPERTIES.PETFRIENDLY,
  ADITIONAL_PROPERTIES.POLITICALPREFERENCE,
  ADITIONAL_PROPERTIES.ZOMBIEAPOCALYPSE,
  ADITIONAL_PROPERTIES.SOCCERTEAMPREFERENCEDETAIL,
  ADITIONAL_PROPERTIES.SCARF,
];

const NUMBER_OF_COINCIDENCES = 4;

export const searchForCoincidences = async (id: any) => {
  try {
    const userDocRef = doc(db, 'users', id);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) return { success: false, error: 'No user found' };
    const initialUser = userDocSnap.data();

    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);

    const users = querySnapshot.docs.filter((doc) => doc.id !== id).map((doc) => doc.data());

    const matchedUsers = [];

    for (const user of users) {
      let matchCount = [];
      for (const prop of PROPS) {
        if (user[prop] === initialUser[prop]) {
          matchCount.push(prop);
        }
      }
      if (matchCount.length >= NUMBER_OF_COINCIDENCES) matchedUsers.push({ ...user, matchCount });
    }

    return { success: true, data: matchedUsers };
  } catch (error) {
    return { success: false, error };
  }
};

const ZODIAC = {
  aries: ['geminis', 'leo', 'sagitario', 'acuario'],
  tauro: ['cancer', 'virgo', 'capricornio', 'piscis'],
  geminis: ['aries', 'leo', 'libra', 'acuario'],
  cáncer: ['tauro', 'virgo', 'escorpio', 'piscis'],
  leo: ['aries', 'geminis', 'libra', 'sagitario'],
  virgo: ['tauro', 'cancer', 'escorpio', 'capricornio'],
  libra: ['géminis', 'leo', 'sagitario', 'acuario'],
  escorpio: ['cáncer', 'virgo', 'capricornio', 'piscis'],
  sagitario: ['aries', 'leo', 'libra', 'acuario'],
  capricornio: ['tauro', 'cancer', 'virgo', 'escorpio'],
  acuario: ['aries', 'geminis', 'libra', 'sagitario'],
  piscis: ['tauro', 'cancer', 'escorpio', 'capricornio'],
};

export const searchForZodiacCompatibility = async (id: any, otherId: any) => {
  try {
    const userDocRef1 = doc(db, 'users', id);
    const userDocSnap1 = await getDoc(userDocRef1);

    if (!userDocSnap1.exists()) return { success: false, error: 'No user found' };
    const user1 = userDocSnap1.data();

    const userDocRef2 = doc(db, 'users', otherId);
    const userDocSnap2 = await getDoc(userDocRef2);

    if (!userDocSnap2.exists()) return { success: false, error: 'No user found' };
    const user2 = userDocSnap2.data();

    const isCompatible = ZODIAC[user1.zodiac as keyof typeof ZODIAC].includes(user2.zodiac);

    return { success: true, data: isCompatible };
  } catch (error) {
    return { success: false, error };
  }
};
