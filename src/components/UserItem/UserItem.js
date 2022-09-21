import React from 'react';

import './UserItem.css';

const UserItem = (props) => {
  return (
    <div className="users">
      <ul>
        {
          props.userList.map(user => {
            return (
              <li key={user.id}>{user.username} {user.age} Years Old</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UserItem
