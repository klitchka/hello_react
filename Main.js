import { useState, useEffect } from 'react';
import LikeButton from './Button';
import Status from './StatusButton.js';
import firebase from "firebase/app";
import "firebase/firestore";
require('dotenv').config();

const name = 'Klitchka';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const MainSquare = ({ title }) => {

  useEffect(() => {
    // obtener los valores actuales de la base de datos
    const getValues = async () => {
      const docRef = db.collection("status").doc("rSKQNfaGMjl9CnJ47cQ6");
      const doc = await docRef.get();
      if (doc.exists) {
        setHappy(doc.data().happy);
        setLove(doc.data().love);
        setHealthy(doc.data().healthy);
        setLikeCount(doc.data().likecount);
      }
    };
    getValues();
  }, []);

  const updateFirebase = async () => {
    const docRef = db.collection("status").doc("rSKQNfaGMjl9CnJ47cQ6");
    await docRef.update({
      happy: happy,
      love: love,
      healthy: healthy,
      likecount: likeCount + 1
    });
    const updatedDoc = await docRef.get();
    setLikeCount(updatedDoc.data().likecount);
    setHappy(updatedDoc.data().happy);
    setLove(updatedDoc.data().love);
    setHealthy(updatedDoc.data().healthy);
  };

  return (
    <header>
      <p>
        <h1 style={mainstyle}>Hello {name}</h1>
        <h1 style={questions}>Are you happy?
        <Status onClick={updateFirebase}>
        {happy ? 'Yes' : 'No'}</Status></h1>


        <h1 style={questions}>Are you in love? 
        <Status onClick={updateFirebase}>
        {love ? 'Yes' : 'No'}</Status></h1>


        <h1 style={questions}>Are you healthy? 
        <Status onClick={updateFirebase}>
        {healthy ? 'Yes' : 'No'}</Status></h1>

      </p>
      <br/><br/><br/>
      <p>{title}</p>
      <br/>
      <LikeButton text={`Give Love (${likeCount})`} onClick={updateFirebase}></LikeButton>        
    </header>
  )
  
}


MainSquare.defaultProps = {
  title: "holi",
}

const mainstyle = {
  color: 'black', 
  backgroundColor: 'white'
}

const questions = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '16px'
}
