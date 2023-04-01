import React from 'react';
import ReactDOM from 'react-dom/client';
import { IconContext } from 'phosphor-react';

import { AppRoutes } from './routes';

import './styles/global.css';

ReactDOM.createRoot(document.querySelector('app') as HTMLElement).render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: 24 }}>
      <AppRoutes />
    </IconContext.Provider>
  </React.StrictMode>,
);
