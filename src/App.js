import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './MainMenu';
import Instinct from './Instinct';
import Intellect from './Intellect';
import Fight from './Fight';
import PriceList from './PriceList';
import './App.css';
import './Instinct.css';
import './Intellect.css';
import './MainMenu.css';
import './Fight.css';
import './PriceList.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/instinct" element={<Instinct />} />
          <Route path="/intellect" element={<Intellect />} />
          <Route path="/fight" element={<Fight />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
