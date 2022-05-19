import React from 'react';
import Kristyna from './foto.Kristyna.jpg';
import Regina from './foto.Regina.jpg';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* TODO: nastavit na button proklik na např. "O projektu"  nebo po kliknutí může být pop up "Tak klikni na 'O projektu'!" */

export const Main = () => {
  return (
    <div className="container" id="container">
      <main>
        <h2>
          Ahoj! Vítáme tě na webové stránce věnované informacím ohledně našeho
          závěrečného projektu Digitální akademie: <br></br> ProDobro -
          Platforma pro dobročinné aukce
        </h2>
        <h3>Autorky</h3>
        <div className="authors">
          <img
            className="authors_photo"
            src={Kristyna}
            alt="autorka Kristýna"
          />
          <img className="authors_photo" src={Regina} alt="autorka Regina" />
        </div>
        {/*  button bude mít funkci onClick a dostane nás to na stránku Projekt */}
        <Link to="/projekt">
          <button className="btn_more"> CHCI SE DOZVĚDĚT ✨ VÍC ✨</button>
        </Link>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web, 2022</p>
      </footer>
    </div>
  );
};
