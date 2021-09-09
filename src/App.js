import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Pages/Home/Home"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Route exact path ="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
