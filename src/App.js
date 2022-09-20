import React, { useState } from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (user, age) => {
    setUserName(user);
    setUserAge(age);
  }

  return (
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList username={userName} age={userAge} />
    </div>
  );
}

export default App;
