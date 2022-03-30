/* eslint-disable no-console */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyB8Akv5eUhP5FlwqvlQpVweqaxz2wUO0uQ',
  authDomain: 'dtlweb.firebaseapp.com',
  databaseURL: 'https://dtlweb.firebaseio.com',
  projectId: 'dtlweb',
  storageBucket: 'dtlweb.appspot.com',
  messagingSenderId: '147986679059',
  appId: '1:147986679059:web:94831dd127817bda7fc6e6',
  measurementId: 'G-T43QF153ZT',
};

export { firebase, firebaseConfig };
