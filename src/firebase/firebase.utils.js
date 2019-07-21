import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDS-dunaulUJx6Cf7mhzKggusi4_nZRFPI',
  authDomain: 'crwn-db-6a38f.firebaseapp.com',
  databaseURL: 'https://crwn-db-6a38f.firebaseio.com',
  projectId: 'crwn-db-6a38f',
  storageBucket: '',
  messagingSenderId: '1010520487376',
  appId: '1:1010520487376:web:cd5a95a251c75e01'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
