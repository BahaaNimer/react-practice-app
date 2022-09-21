import React, { useState, useRef } from 'react';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ErrorModel from '../UI/ErrorModel/ErrorModel';
import Card from '../UI/Card/Card';
import classes from './UserFrom.module.css'

const UserForm = (props) => {
  const username = useRef();
  const age = useRef();
  // const [username, setUsername] = useState('');
  // const [age, setAge] = useState('');
  const [error, setError] = useState();

  const userInfoHandler = (event) => {
    event.preventDefault();
    const enteredUsername = username.current.value;
    const enteredAge = age.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than 0.',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    username.current.value = '';
    age.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
            ref={username}
            placeholder="Enter your name"
          />
          <label htmlFor="age">Age (Years)</label>
          <Input
            id="age"
            type="number"
            ref={age}
            placeholder='Enter your age'
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default UserForm