import React from "react";

function UserList({ users }) {
  return (
    <div className="user-list container">
      {users.map((user, index) => (
        <div key={index}>
          <h5 className="is-size-5">{user}</h5>
        </div>
      ))}
    </div>
  );
}

export default UserList;
