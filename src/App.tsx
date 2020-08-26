import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import AppProvider from './hooks/index';

import Global from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <Global />
    </BrowserRouter>
  );
};

export default App;
