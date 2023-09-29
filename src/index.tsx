import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {catalogFilmCards, filmCardData} from './data/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const props = {
  catalogFilmCards,
  filmCardData,
};

root.render(
  <React.StrictMode>
    <App props={props}/>
  </React.StrictMode>
);
