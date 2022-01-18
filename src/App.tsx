import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MyPosts from './pages/MyPosts';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <main className='App'>
      <AppProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/my-posts' component={MyPosts} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </main>
  );
};

export default App;
