import React, { useState, useEffect } from 'react';
import { getFirestore, doc, onSnapshot, updateDoc } from 'firebase/firestore';

const MainSquare = ({ selectedDB }) => {
  const [title, setTitle] = useState("");
  const [happy, setHappy] = useState(false);
  const [healthy, setHealthy] = useState(false);
  const [love, setLove] = useState(false);

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, "Friends", selectedDB);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      const data = doc.data();
      setTitle(`Hello, ${selectedDB}`);
      setHappy(data.happy);
      setHealthy(data.healthy);
      setLove(data.love);
    });

    return () => {
      unsubscribe();
    };
  }, [selectedDB]);

  const handleButtonToggle = async (field) => {
    const db = getFirestore();
    const docRef = doc(db, "Friends", selectedDB);

    await updateDoc(docRef, {
      [field]: !eval(field),
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>
        Are you happy? 
        <button onClick={() => handleButtonToggle('happy')}>
          {happy ? 'Yes' : 'No'}
        </button>
      </p>
      <p>
        Are you healthy? 
        <button onClick={() => handleButtonToggle('healthy')}>
          {healthy ? 'Yes' : 'No'}
        </button>
      </p>
      <p>
        Are you in love?
        <button onClick={() => handleButtonToggle('love')}>
          {love ? 'Yes' : 'No'}
        </button>
      </p>
    </div>
  );
};

export default MainSquare;
