import React, { useState, useEffect } from 'react';
import MainSquare from './components/MainSquare';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
const db = getFirestore(app);

const App = () => {
  const [selectedDB, setSelectedDB] = useState("");
  const [dbNames, setDBNames] = useState([]);

  useEffect(() => {
    fetchDBNames();
  }, []);

  const fetchDBNames = async () => {
    const querySnapshot = await getDocs(collection(db, 'Friends'));
    const names = querySnapshot.docs.map((doc) => doc.id);
    setDBNames(names);
  };

  const handleDBChange = (event) => {
    setSelectedDB(event.target.value);
  };

  return (
    <div className="container">
      <select value={selectedDB} onChange={handleDBChange}>
        <option value="">Hi, friend</option>
        {dbNames.map((dbName) => (
          <option key={dbName} value={dbName}>
            {dbName}
          </option>
        ))}
      </select>
      {selectedDB && <MainSquare selectedDB={selectedDB} />}
    </div>
  );
};

export default App;
