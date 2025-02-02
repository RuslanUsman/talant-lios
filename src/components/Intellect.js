import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Intellect.css';

const talents = [
  { name: 'Мото маньяк', image: `${process.env.PUBLIC_URL}/images/moto.jpg`, info: 'Информация о таланте: Проехать 100 000 метров на любом транспорте.' },
  { name: 'Непроходимая местность', image: `${process.env.PUBLIC_URL}/images/neprohodimestnost.jpg`, info: 'Информация о таланте: Убить 2 монстра.' },
  { name: 'Супермощный салдат', image: `${process.env.PUBLIC_URL}/images/supersaldat.jpg`, info: 'Информация о таланте Выносливость.' },
  { name: 'Дистанционное управление', image: `${process.env.PUBLIC_URL}/images/distanupravleniy.jpg`, info: 'Информация о таланте Умение плавать.' },
  // Добавьте остальные таланты здесь
];

function Intellect() {
  const [selectedTalent, setSelectedTalent] = useState(null);

  const handleInfoClick = (talent) => {
    setSelectedTalent(talent);
  };

  const handleBackClick = () => {
    setSelectedTalent(null);
  };

  return (
    <div className="Instinct">
      <h1>Интеллект</h1>
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

export default Intellect;

