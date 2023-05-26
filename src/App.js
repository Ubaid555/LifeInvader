import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      {/* <Hero/> */}
      <Router>
        <Routes>
          <Route path="/lifeInvader" element={<Main/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
