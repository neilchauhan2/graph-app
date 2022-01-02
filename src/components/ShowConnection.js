import React, { useState } from "react";

const ShowConnection = ({
  users,
  setGraph,
  graph,
  connection,
  setConnection,
}) => {
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
    <div className="show-connection container columns">
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
        <button onClick={handleSubmit} className="button is-primary">
          Show Connection
        </button>
      </div>
    </div>
  );
};

export default ShowConnection;
