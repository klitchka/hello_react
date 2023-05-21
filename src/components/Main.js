import LikeButton from './Button';
import HappyButton from './HappyButton';
import LoveButton from './LoveButton';
import HealthyButton from './HealthyButton';
import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDB, setSelectedDB] = useState("status"); // Estado para almacenar la base de datos seleccionada
  const [users, setUsers] = useState([]);

  async function searchInCollections(searchTerm) {
    const selectedQuery = query(collection(db, selectedDB), where('name', '==', searchTerm));

    const selectedResult = await getDocs(selectedQuery);

    const selectedDocs = selectedResult.docs.map(doc => doc.data());

    return selectedDocs;
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
  }, [searchTerm, selectedDB]); // Agregar selectedDB a las dependencias del useEffect

  return (
    <div>
      <select onChange={(event) => setSelectedDB(event.target.value)}> // Selector desplegable para elegir la base de datos
        <option value="status">Status</option>
        <option value="statusAndritte">StatusAndritte</option>
      </select>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
      <header>
        <h1>Hello, {name}</h1>
        <h1 style={questions}>Are you happy?<HappyButton /></h1>
        <h1 style={questions}>Are you in love?<LoveButton /></h1>
        <h1 style={questions}>Are you healthy?<HealthyButton /></h1>
        <br></br>
        <p>{title}</p>
        <LikeButton text='Give Love' />
      </header>
    </div>
  )
}
