import "bulma/css/bulma.min.css";
import { useState } from "react";
import "./App.css";
import AddConnection from "./components/AddConnection";
import AddUser from "./components/AddUser";
import ShowConnection from "./components/ShowConnection";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [graph, setGraph] = useState(new Map());
  const [connection, setConnection] = useState([]);

  return (
    <div className="App container">
      <AddUser
        users={users}
        setUsers={setUsers}
        graph={graph}
        setGraph={setGraph}
      />
      <UserList users={users} />
      <AddConnection users={users} graph={graph} setGraph={setGraph} />
      <ShowConnection
        users={users}
        graph={graph}
        setGraph={setGraph}
        connection={connection}
        setConnection={setConnection}
      />
      <div className="container">
        {connection.map((c, index) => (
          <div key={`connection-col-${index}`}>
            {c.map((item, idx) => (
              <span key={`connection-${idx}`}>
                {idx === c.length - 1 ? `${item}` : `${item} > `}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
