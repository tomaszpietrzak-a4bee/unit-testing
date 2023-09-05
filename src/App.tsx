import "./App.css";
import Users from "./components/users/Users";
import UsersWithHook from "./components/usersWithHook/UsersWithHook";

function App() {
  return (
    <div className="App">
      {/* <Users /> */}
      <UsersWithHook />
    </div>
  );
}

export default App;
