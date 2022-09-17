import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home.js";
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LoginSignup/>} />
          <Route exact path="/" element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
