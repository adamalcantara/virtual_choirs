import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      </Router>
    </div>
  );
}

export default App;
