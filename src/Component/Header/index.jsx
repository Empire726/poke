import React, { useState } from 'react';
import '../StyleSheet/Header/Header.css';
import { MenuItems } from './MultiItem';
import { Link } from 'react-router-dom';


export const Header = () => {

const [clicked, setClicked] = useState(false);

const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>     
    <div className="nav-body">
    <nav className="Navbar">
    <div className="image-c">
      <h2 className='navbar-logo'>Pokemon</h2>
        </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="nav-item">
              <Link className={item.cName} to={item.url} onClick={handleClick}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </div>
  </>
  );
}


