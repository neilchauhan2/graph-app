import { useState } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AddConnection from "./components/AddConnection";
import AddUser from "./components/AddUser";
import Connections from "./components/Connections";
import ShowConnection from "./components/ShowConnection";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [graph, setGraph] = useState(new Map());
  const [connection, setConnection] = useState([]);

  return (
    <div className="App container">
      <div className="columns m-1 users">
        <div className="col add-user-container">
          <AddUser
            users={users}
            setUsers={setUsers}
            graph={graph}
            setGraph={setGraph}
          />
        </div>
        <div className="col user-list-container box">
          <UserList users={users} />
        </div>
      </div>
      <AddConnection users={users} graph={graph} setGraph={setGraph} />
      <ShowConnection
        users={users}
        graph={graph}
        setGraph={setGraph}
        connection={connection}
        setConnection={setConnection}
      />
      <Connections connection={connection} />
    </div>
  );
}

export default App;
