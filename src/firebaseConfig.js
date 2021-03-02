import dotenv from 'dotenv';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

dotenv.config();

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: 'AIzaSyAVeBz1hF0f1LHH0G3FaiajieevZPUDs6s',
  authDomain: 'real-generosity-app.firebaseapp.com',
  projectId: 'real-generosity-app',
  storageBucket: 'real-generosity-app.appspot.com',
  messagingSenderId: '180908185202',
  appId: '1:180908185202:web:f92d35f0c0660f412354eb',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
