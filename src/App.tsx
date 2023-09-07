import "./App.css";
import AuthButtons from "./components/AuthButtons/AuthButtons";
import Calculator from "./components/Calculator/Calculator";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthButtons />
      <Calculator />
    </div>
  );
}

export default App;
