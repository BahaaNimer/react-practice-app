import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const userInfoHandler = (event) => {
    event.preventDefault();
    props.onAddUser(username, age);
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <form onSubmit={userInfoHandler}>
      <label>UserName</label>
      <Input type='text' onChange={usernameHandler} />
      <label>Age (years)</label>
      <Input type='text' onChange={ageHandler} />
      <Button type='submit'>Add User</Button>
    </form>
  )
}

export default UserForm