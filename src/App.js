import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/modal/add-item" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
