import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const { searchTerm, talents } = location.state;

  const filteredTalents = talents.filter((talent) =>
    talent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="SearchResults">
      <h1>Результаты поиска</h1>
      <div className="talents">
        {filteredTalents.map((talent) => (
          <div key={talent.name} className="talent">
            <img src={talent.image} alt={talent.name} />
            <h2>{talent.name}</h2>
            <p>{talent.info}</p>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="menu-button">Меню</button>
      </Link>
    </div>
  );
}

export default SearchResults;
