import "./App.css";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/plans";
import Join from "./components/Join/Join";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      {/* <Hero/> */}
      <Router>
        <Routes>
          <Route path="/lifeInvader" element={<Main/>} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
