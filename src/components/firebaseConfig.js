import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-SRCyw_fzQm6QzOCcka-pyP9qCwKDJl0",
  authDomain: "hello-klitchka.firebaseapp.com",
  projectId: "hello-klitchka",
  storageBucket: "hello-klitchka.appspot.com",
  messagingSenderId: "37045171502",
  appId: "1:37045171502:web:e9cfea68e63a257258b6bf",
  measurementId: "G-KBSY38VQJ5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
