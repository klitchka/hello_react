import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    // Leer el recuento de me gusta de Firestore y actualizar el estado
    const docRef = doc(db, 'status', 'rSKQNfaGMjl9CnJ47cQ6');
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setLikeCount(doc.data().likecount);
      } else {
        console.log('No se encontró el documento');
      }
    });
  }, []);

  function handleButtonClick() {
    const newLikeCount = likeCount + 1;
    setLikeCount(newLikeCount);
    // Actualizar el número de me gusta en Firestore
    const docRef = doc(db, 'status', 'rSKQNfaGMjl9CnJ47cQ6');
    updateDoc(docRef, { likecount: newLikeCount });
  }

  return (
    <div>
      <button id="like-button" onClick={handleButtonClick}>
        Give love ({likeCount})
      </button>
    </div>
  );
}

export default LikeButton;
