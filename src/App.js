import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">

    <Header />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         
        </Routes>
    </Router>
    </div>
  );
}

export default App;
