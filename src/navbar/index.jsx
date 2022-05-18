import React from 'react';
import { Link } from 'react-router-dom';

/* je to myšlený tak, že tuhle komponentu vložíme vždycky na začátek každé té nové stránky */

export const Navbar = () => {
  return (
    <>
      <div>
        <h1>Závěrečný projekt Digitální akademie WEB 🖥 </h1>{' '}
        <div id="nav">
          <nav className="navigation">
            <Link to="/projekt">Projekt</Link>
            <Link to="/autorky">O autorkách</Link>
          </nav>
          <Outlet />
        </div>
      </div>
    </>
  );
};
