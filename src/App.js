import './App.css';
import { useState, useEffect } from 'react';
import {db} from './firebase'
import {collection, getDocs} from 'firebase/firestore'; 

function App() {
  const [users, setUsers] = useState([]);
  const userRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
      //console.log(data);
    }
    getUsers();
  }, [])

  return (
    <div className="App">
      <h1>Personal Website</h1>
      
      { users.map((user) => {
          return <div key={user.id}>
            <h1>{user.id}</h1>
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
          </div>
      })}
      
    </div>
  );
}

export default App;
