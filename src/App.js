import "bulma/css/bulma.min.css";
import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App container">
      <AddUser users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
