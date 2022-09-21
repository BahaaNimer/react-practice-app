import React from 'react';

import UserItem from '../UserItem/UserItem';

const UserList = (props) => {
  return (
    <div className='userList'>
      <UserItem userList={props.userList} />
    </div>
  )
}

export default UserList