import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Instinct.css';

const talents = [
  { name: 'Радио устойчивость', image: '/images/radioustoichiv.jpg', info: 'Информация о таланте: Убить 3 игроков в зоне радиации (без рад.маски)' },
  { name: 'Защита зозяина', image: '/images/zachitsxozyina.jpg', info: 'Информация о таланте: Питомец должен сбить с ног 2 игрока, пока НР владельца ниже 30%' },
  { name: 'Не вкусная еда', image: '/images/nevkuseda.jpg', info: 'Информация о таланте: Приготовить 100 любой еды.' },
  { name: 'Истребление', image: '/images/istreblenie.jpg', info: 'Информация о таланте: Убить 100 питомцев других игроков.' },
  { name: 'Гурман', image: '/images/gurman.jpg', info: 'Информация о таланте: Приготовить 200 ед. любой еды.' },
  { name: 'Запас воды', image: '/images/zapasvod.jpg', info: 'Информация о таланте: Выпить воду с фляги 200 раз.' },
  { name: 'Охотничья метка', image: '/images/oxotmetka.jpg', info: 'Информация о таланте: Убить 5 игроков используя Охотгичью метку.' },
  { name: 'Сила баланса', image: '/images/silabalans.jpg', info: 'Информация о таланте: Ваш питомец должен получить 10 000 урона.' },
  { name: 'Само заживление', image: '/images/samozagivleniy.jpg', info: 'Информация о таланте: Восстоновите в общей сложности 30 000 ед. жажды либо голода.' },
  { name: 'Месть', image: '/images/mestb.jpg', info: 'Информация о таланте: Питомец должен нанести 5 000 ед. урона противника.' },
  { name: 'Адреналин', image: '/images/adrenalin.jpg', info: 'Информация о таланте: Убить 10 игроков в одном бою когда ваша здоровье ниже 30%.' },
  { name: 'Охотник', image: '/images/ohotnik.jpg', info: 'Информация о таланте: Убить 200 любых животных (не питомцев).' },
  { name: 'Рюкзак', image: '/images/rykzak.jpg', info: 'Информация о таланте: Необходимо убить 1 игрока вы и ваш враг должны быть полностью пустые.' },
  // Добавьте остальные таланты здесь
];

function Instinct() {
  const [selectedTalent, setSelectedTalent] = useState(null);

  const handleInfoClick = (talent) => {
    setSelectedTalent(talent);
  };

  const handleBackClick = () => {
    setSelectedTalent(null);
  };

  return (
    <div className="Instinct">
      <h1>Инстинкт</h1>
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

export default Instinct;

