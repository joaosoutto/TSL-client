import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import { AppProvider } from './context/AppContext';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import MyPosts from './pages/MyPosts';
import NotFound from './pages/NotFound';

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    return userToken === null ? setToken('') : setToken(userToken);
  }, []);

  return (
    <main className='App'>
      <AppProvider>
        <Header token={token} />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/my-posts' component={MyPosts} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/sign-in' component={Signin} />
            <Route path='/' component={NotFound} />
          </Switch>
        </BrowserRouter>
        <BottomNavigation token={token} />
      </AppProvider>
    </main>
  );
};

export default App;
