import LikeButton from './Button';
import HappyButton from './HappyButton';
import LoveButton from './LoveButton';
import HealthyButton from './HealthyButton';
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from 'firebase/firestore';

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

const name = 'Klitchka';

const questions = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '16px'
}

export const MainSquare = ({ title }) => {
  const [selectedDB, setSelectedDB] = useState("status");
  const [docId, setDocId] = useState('rSKQNfaGMjl9CnJ47cQ6');
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userStatus, setUserStatus] = useState({ happy: false, inLove: false, healthy: false });

  async function searchInCollections(searchTerm) {
    const selectedQuery = query(collection(db, selectedDB), where('name', '==', searchTerm));

    const selectedResult = await getDocs(selectedQuery);

    const selectedDocs = selectedResult.docs.map(doc => doc.data());

    return selectedDocs;
  }

  const updateStatus = async (field, value) => {
    const statusDocRef = doc(db, `${selectedDB}/${docId}`);
    await setDoc(statusDocRef, { [field]: value }, { merge: true });
  }

  useEffect(() => {
    if (searchTerm === "") {
      setUsers([]);
      return;
    }

    searchInCollections(searchTerm)
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [searchTerm, selectedDB]);

  useEffect(() => {
    if (users.length > 0) {
      setUserStatus({
        happy: users[0].happy,
        inLove: users[0].inLove,
        healthy: users[0].healthy,
      });
    }
  }, [users]);

  return (
    <div>
      <select onChange={(event) => {
        setSelectedDB(event.target.value);
        setSearchTerm(event.target.value);
      }}>
        <option value="">Select a user</option>
        <option value="status">Status</option>
        <option value="statusAndritte">StatusAndritte</option>
      </select>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Love: {user.love}</p>
          <p>Happy: {user.happy}</p>
          <p>Healthy: {user.healthy}</p>
          <p>Like count: {user.likecount}</p>
        </div>
      ))}
      <header>
        <h1>Hello, {name}</h1>
        <h2 style={questions}>
          Are you happy?<HappyButton isHappy={userStatus.happy} updateStatus={updateStatus} />
        </h2>
        <h2 style={questions}>
          Are you in love?<LoveButton isInLove={userStatus.inLove} updateStatus={updateStatus} />
        </h2>
        <h2 style={questions}>
          Are you healthy?<HealthyButton isHealthy={userStatus.healthy} updateStatus={updateStatus} />
        </h2>
        <p>{title}</p>
        <LikeButton text='Give Love' />
      </header>
    </div>
  )
}