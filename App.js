import { MainSquare } from "./components/Main";
import React from "react";
import 'firebase/auth';
import firebase from "firebase/app";
import "firebase/firestore";
require('dotenv').config();
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

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

function App() {
  
  return (
    <div className="container">
      <MainSquare title="Thanks for passing by."></MainSquare>
    </div>
   
  );
}

/*class Test extends React.Component 
{
  render () 
  {
   return <h1>clase</h1> 
  }
}
*/
export default App;