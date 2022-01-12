import React, { useEffect, useState } from 'react';
import './App.css';

import { AppProvider } from './context/AppContext';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    return userToken === null ? setToken('') : setToken(userToken);
  }, []);

  return (
    <AppProvider>
      <div className='App'>
        <Header token={token} />
        <BottomNavigation token={token} />
      </div>
    </AppProvider>
  );
};

export default App;
