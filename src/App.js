import React, { useState } from 'react';
import MainSquare from './components/MainSquare';
import { initializeApp } from 'firebase/app';

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

const App = () => {
  const [selectedDB, setSelectedDB] = useState("");

  const handleDBChange = (event) => {
    setSelectedDB(event.target.value);
  };

  return (
    <div className="container">
      <select value={selectedDB} onChange={handleDBChange}>
        <option value="">Hi, friend</option>
        <option value="Andritte">Andritte</option>
        <option value="Klitchka">Klitchka</option>
      </select>
      {selectedDB && <MainSquare selectedDB={selectedDB} />}
    </div>
  );
};

export default App;
