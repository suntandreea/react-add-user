import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const updateUsersList = (receivedUsername, receivedAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.random().toString(), name: receivedUsername, age: receivedAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={updateUsersList} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
