import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import MainMenu from './MainMenu';
import Instinct from './Instinct';
import Intellect from './Intellect';
import Fight from './Fight';
import PriceList from './PriceList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/instinct" element={<Instinct />} />
        <Route path="/intellect" element={<Intellect />} />
        <Route path="/fight" element={<Fight />} />
        <Route path="/pricelist" element={<PriceList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


