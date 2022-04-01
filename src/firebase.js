import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyChZucSQrj2xWhTLbPT8x7-HFMpgprBk74',
  authDomain: 'disneyplus-clone-4d43b.firebaseapp.com',
  projectId: 'disneyplus-clone-4d43b',
  storageBucket: 'disneyplus-clone-4d43b.appspot.com',
  messagingSenderId: '304830908490',
  appId: '1:304830908490:web:1b98d63abbc2fb7a43feb3',
  measurementId: 'G-FVMWRM50SG',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
