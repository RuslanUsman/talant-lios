import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  return (
    <div className="MainMenu">
      <div className="talents">
        <div className="talent">
          <img src="path/to/instinct.jpg" alt="Инстинкт" />
          <h2>Инстинкт</h2>
          <Link to="/instinct">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className="talent">
          <img src="path/to/intellect.jpg" alt="Интеллект" />
          <h2>Интеллект</h2>
          <Link to="/intellect">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className="talent">
          <img src="path/to/fight.jpg" alt="Бой" />
          <h2>Бой</h2>
          <Link to="/fight">
            <button>Подробнее</button>
          </Link>
        </div>
        <div className="talent">
          <img src="path/to/pricelist.jpg" alt="Прайс лист" />
          <h2>Прайс лист</h2>
          <Link to="/pricelist">
            <button>Подробнее</button>
          </Link>
        </div>
      </div>
      <div className="additional-images">
        <img src="/images/umList.jpg" alt="Дополнительное изображение 1" />
        <img src="/images/teloList.jpg" alt="Дополнительное изображение 2" />
      </div>
    </div>
  );
}

export default MainMenu;

