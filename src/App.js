import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <RequiredAuth>
          <Home />
          <Login />
        
      </RequiredAuth>
    </div>
  );
}

export default App;
