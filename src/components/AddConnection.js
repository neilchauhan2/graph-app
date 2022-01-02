import React, { useState } from "react";

const AddConnection = ({ users, setGraph, graph }) => {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");

  const handleSubmit = () => {
    const newGraph = graph;

    newGraph.get(firstUser).push(secondUser);
    newGraph.get(secondUser).push(firstUser);
    setGraph(newGraph);
  };

  return (
    <div className="add-connection container columns">
      <div className="column">
        <div className="control">
          <div className="select is-fullwidth">
            <select
              value={firstUser}
              onChange={(e) => setFirstUser(e.target.value)}
            >
              {users.map((user, index) => (
                <option key={`option-1-${index}`}>{user}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="control ">
          <div className="select is-fullwidth">
            <select
              value={secondUser}
              onChange={(e) => setSecondUser(e.target.value)}
            >
              {users.map((user, index) => (
                <option key={`option-2-${index}`}>{user}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="column">
        <button onClick={handleSubmit} className="button is-link">
          Add Connection
        </button>
      </div>
    </div>
  );
};

export default AddConnection;
