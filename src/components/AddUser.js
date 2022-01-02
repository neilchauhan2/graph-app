import React, { useState } from "react";

function AddUser({ users, setUsers, setGraph, graph }) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    setUsers([...users, username]);
    if (!graph.has(username)) {
      setGraph(graph.set(username, []));
    }
    setUsername("");
  };

  return (
    <div className="add-user">
      <h3 className="is-size-3">Add User</h3>
      <div className="field has-addons">
        <div className="control ">
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
