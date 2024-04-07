import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SideMenu from "./components/sideMenu";
import Invite from "./components/invite";
import Home from "./screens/home";
import Soldier from "./screens/soldier";

function App() {
  return (
    <Router>
      <div>
        <div className="borderV"></div>
        <Navbar />
        <Invite />
        <div className="border"></div>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soldier" element={<Soldier />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
