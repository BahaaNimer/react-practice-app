import React, { useState } from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList userList={usersList}/>
    </div>
  );
}

export default App;
