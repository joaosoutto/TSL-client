import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import { AppProvider } from './context/AppContext';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
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
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route path='/' component={NotFound} />
          </Switch>
        </BrowserRouter>
        <BottomNavigation token={token} />
      </AppProvider>
    </main>
  );
};

export default App;
