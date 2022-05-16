import React from 'react';
import { Link } from 'react-router';

/* je to myšlený tak, že tuhle komponentu vložíme vždycky na začátek každé té nové stránky */

export const Navbar = () => {
  return (
    <>
      <div>
        <h1>Závěrečný projekt Digitální akademie WEB 🖥 </h1>
        <div id="nav">
          <nav className="navigation">
            <a href="/projekt">Projekt</a>
            <a href="/autorky">O autorkách</a>
          </nav>
        </div>
      </div>
    </>
  );
};
