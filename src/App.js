import './App.css';
import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FormDetail from './Pages/FormDetail';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/forms" element={<Home />} />
        <Route exact path="/forms/:formId" element={<FormDetail />} />
        <Route path="*" element={<Navigate to="/forms" />} />
      </Routes>
    </div>
  );
}

export default App;
