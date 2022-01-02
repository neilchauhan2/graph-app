import "bulma/css/bulma.min.css";
import { useState } from "react";
import "./App.css";
import AddConnection from "./components/AddConnection";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [graph, setGraph] = useState(new Map());

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
    </div>
  );
}

export default App;
