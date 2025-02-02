import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Instinct from './components/Instinct';
import Intellect from './components/Intellect';
import Fight from './components/Fight';
import PriceList from './components/PriceList';
import TalantLios from './components/TalantLios'; // Добавьте этот импорт
import './App.css';

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
          <Route path="/talant-lios" element={<TalantLios />} /> {/* Добавьте этот маршрут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

