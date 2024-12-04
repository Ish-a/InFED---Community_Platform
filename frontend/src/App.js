import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDashboard from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        {/* Additional routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;