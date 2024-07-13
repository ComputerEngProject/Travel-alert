import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorldMap from './WorldMap';
import WorldMap2 from './WorldMap2';
import FirstScreen from './FirstScreen';

const App = () => {
  return (
    <Router>
      <div className="app-container">
      <Routes>
         <Route path="/" element={<FirstScreen />} />
         <Route path="/WorldMap" element={<WorldMap />} />
         <Route path="/WorldMap2" element={<WorldMap2 />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
