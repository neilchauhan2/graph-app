import React, { useState } from "react";
import { toast } from "react-toastify";

const AddConnection = ({ users, setGraph, graph }) => {
  toast.configure();

  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");

  const handleSubmit = () => {
    const newGraph = graph;

    newGraph.get(firstUser).push(secondUser);
    newGraph.get(secondUser).push(firstUser);
    setGraph(newGraph);
    toast.success(`Added ${firstUser} and ${secondUser} as friends.`);
  };

  return (
    <div className="add-connection container">
      <h3 className="is-size-3 has-text-weight-bold">Add Connection</h3>
      <div className="columns">
        <div className="column">
          <div className="control">
            <div className="select is-fullwidth">
              <select
                value={firstUser}
                onChange={(e) => {
                  if (e.target.value !== "--Select--") {
                    setFirstUser(e.target.value);
                  }
                }}
              >
                <option>--Select--</option>
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
                onChange={(e) => {
                  if (e.target.value !== "--Select--") {
                    setSecondUser(e.target.value);
                  }
                }}
              >
                <option>--Select--</option>
                {users.map((user, index) => (
                  <option key={`option-2-${index}`}>{user}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="column">
          <button
            onClick={handleSubmit}
            className="button is-link has-text-weight-bold"
          >
            Add Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddConnection;
