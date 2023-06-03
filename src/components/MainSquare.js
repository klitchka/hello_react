import React, { useState, useEffect } from 'react';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

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

  return (
    <div>
      <h1>{title}</h1>
      <p>Happy: {happy.toString()}</p>
      <p>Healthy: {healthy.toString()}</p>
      <p>Love: {love.toString()}</p>
    </div>
  );
};

export default MainSquare;
