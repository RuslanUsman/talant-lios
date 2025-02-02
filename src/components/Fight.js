import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Fight.css';

const talents = [
  { name: 'Ганстер', image: `${process.env.PUBLIC_URL}/images/ganster.jpg`, info: 'Информация о таланте: Убить 15 игроков с помощью холодного оружия.' },
  { name: 'Возвращение', image: `${process.env.PUBLIC_URL}/images/vozvracheniy.jpg`, info: 'Информация о таланте: Убить 5 игроков после использования реаниматора или дефибриллятора в одном бою.' },
  { name: 'Легкое снаряжение', image: `${process.env.PUBLIC_URL}/images/legkoesnoregeniy.jpg`, info: 'Информация о таланте: Убить 5 игроков будучи полностью голым.' },
  { name: 'Точная наводка', image: `${process.env.PUBLIC_URL}/images/tochnavodka.jpg`, info: 'Информация о таланте: Убить 5 игроков выстрелом в голову.' },
  // Добавьте остальные таланты здесь
];

function Fight() {
  const [selectedTalent, setSelectedTalent] = useState(null);

  const handleInfoClick = (talent) => {
    setSelectedTalent(talent);
  };

  const handleBackClick = () => {
    setSelectedTalent(null);
  };

  return (
    <div className="Instinct">
      <h1>Бой</h1>
      {selectedTalent ? (
        <div className="talent-info">
          <img src={selectedTalent.image} alt={selectedTalent.name} />
          <h2>{selectedTalent.name}</h2>
          <p>{selectedTalent.info}</p>
          <button onClick={handleBackClick}>Назад</button>
        </div>
      ) : (
        <div className="talents">
          {talents.map((talent) => (
            <div key={talent.name} className="talent">
              <img src={talent.image} alt={talent.name} />
              <h2>{talent.name}</h2>
              <button onClick={() => handleInfoClick(talent)}>Информация</button>
            </div>
          ))}
        </div>
      )}
      <Link to="/">
        <button className="menu-button">Меню</button>
      </Link>
    </div>
  );
}

export default Fight;

