import React, { useState } from "react";

const ShowConnection = ({ users, graph, setConnection }) => {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");

  const dfs = (graph, src, dest, visited = new Set(), psf, res) => {
    if (src === dest) {
      const path = psf.split(", ");
      res.push(path.slice(0, path.length - 1));
      return;
    }
    visited.add(src);
    for (const nbr of graph.get(src)) {
      if (!visited.has(nbr)) {
        dfs(graph, nbr, dest, visited, psf + nbr + ", ", res);
      }
    }

    visited.delete(src);
  };

  const handleSubmit = () => {
    const visited = new Set();
    const res = [];
    dfs(graph, firstUser, secondUser, visited, firstUser + ", ", res);
    setConnection(res);
  };

  return (
    <div className="show-connection">
      <h3 className="is-size-3 has-text-weight-bold">Show Connection</h3>
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
            className="button is-primary has-text-weight-bold"
          >
            Show Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowConnection;
