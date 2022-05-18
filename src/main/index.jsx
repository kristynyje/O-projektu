import React from 'react';
import Kristyna from './foto.Kristyna.jpg';
import Regina from './foto.Regina.jpg';

export const Main = () => {
  return (
    <div className="container">
      <main>
        <h2 className="h2_app">ProDobro - Platforma pro dobročinné aukce</h2>
        <h3 className="h3_app">Autorky</h3>
        <div className="authors">
          <img src={Kristyna} alt="autorka Kristýna" />
          <img src={Regina} alt="autorka Regina" />
        </div>
        {/*  button bude mít funkci onClick a dostane nás to na stránku Projekt */}
        <button className="btn_more"> CHCI SE DOZVĚDĚT ✨ VÍC ✨</button>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web, 2022</p>
      </footer>
    </div>
  );
};
