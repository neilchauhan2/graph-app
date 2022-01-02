import React, { useState } from "react";

function AddUser({ users, setUsers }) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    setUsers([...users, username]);
    setUsername("");
  };

  return (
    <div className="add-user">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            value={username}
            onChange={handleChange}
            type="text"
            placeholder="Add a User"
          />
        </div>
        <div className="control">
          <button onClick={handleSubmit} className="button is-link">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
