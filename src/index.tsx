import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './Main';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
      </BrowserRouter>,
  </React.StrictMode>
);
