import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import 'BrowserRouter' as an alias

import Homepage from './pages/Homepage';

import './App.css';

function App() {
  return (
    <Router> {/* Wrap your entire application with the 'Router' component */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
