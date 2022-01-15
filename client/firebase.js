// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import auth from '@react-native-firebase/auth';
import { getAuth } from 'firebase/auth';

// const firebase = require('firebase');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDD-PYOTGedfXBwUJY5OVM5mjVsQtUnPYE',
  authDomain: 'whimsical-99334.firebaseapp.com',
  projectId: 'whimsical-99334',
  storageBucket: 'whimsical-99334.appspot.com',
  messagingSenderId: '191471855398',
  appId: '1:191471855398:web:42c10c9cd944201d5ac3e7',
  measurementId: 'G-FP17QCNNH6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default { auth };
