import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppBody from "./components/AppBody";
import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">

      <Router>

      <Header />
      <AppBody>
      <SideBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         {/* chat */}
        </Routes>
        </AppBody>
    </Router>
    </div>
  );
}

export default App;
