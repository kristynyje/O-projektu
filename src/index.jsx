import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Projekt } from './projekt';
import { Autorky } from './autorky';
import { Main } from './main';

import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <div className="page_container">
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

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="projekt" element={<Projekt />} />
        <Route path="autorky" element={<Autorky />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
