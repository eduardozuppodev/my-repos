import React from 'react';
import { GlobalStyles } from './themes';
import { Home } from './pages';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyles />
    </>
  );
};

export default App;
