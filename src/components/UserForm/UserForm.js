import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ErrorModel from '../UI/ErrorModel/ErrorModel';
import Card from '../UI/Card/Card';
import classes from './UserFrom.module.css'

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const userInfoHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1 ) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than 0.',
      });
      return;
    }
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={userInfoHandler}>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
            placeholder="Enter your name"
          />
          <label htmlFor="age">Age (Years)</label>
          <Input
            id="age"
            type="number"
            value={age}
            onChange={ageHandler}
            placeholder='Enter your age'
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default UserForm