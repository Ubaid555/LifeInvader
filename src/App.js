import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact"
import Learn from "./components/Learn/Learn"
function App() {
  return (
    <div className="App">
      {/* <Hero/> */}
      <Router>
        <Routes>
          <Route path="/lifeInvader" element={<Main/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />   
          <Route path="/Learn" element={<Learn />} />      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
