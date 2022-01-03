import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getStorage, ref, uploadBytes } from 'firebase/storage';
// import Constants from 'expo-constants';

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from '@env';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDD-PYOTGedfXBwUJY5OVM5mjVsQtUnPYE',
  authDomain: 'whimsical-99334.firebaseapp.com',
  projectId: 'whimsical-99334',
  storageBucket: 'whimsical-99334.appspot.com',
  messagingSenderId: '191471855398',
  appId: '1:191471855398:web:42c10c9cd944201d5ac3e7',
};
console.log('firebase config', firebaseConfig);
initializeApp(firebaseConfig);
const auth = getAuth();

export default { auth };
