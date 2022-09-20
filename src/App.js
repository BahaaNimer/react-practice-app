import React from 'react';

import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
