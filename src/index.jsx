import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Projekt } from './projekt';
import { Autorky } from './autorky';
import { Navbar } from './navbar';
import { Main } from './main';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <div className="page_container">
        <Navbar />
        <Main />
      </div>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
