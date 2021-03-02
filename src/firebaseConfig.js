import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC4edsRlUvSF_Cu26vsIHVAZI7KBvsJDYA',
  authDomain: 'real-generosity-3916e.firebaseapp.com',
  projectId: 'real-generosity-3916e',
  storageBucket: 'real-generosity-3916e.appspot.com',
  messagingSenderId: '237589675652',
  appId: '1:237589675652:web:d723ac74d3d9b31c758cd1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebaseConfig;

//   export default firebase.firestore();
//   export const auth=firebase.auth();
