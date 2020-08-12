import React from 'react';
import { Route } from 'react-router-dom';
import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import MainLayout from './components/Layout/MainLayout';
import Login from './pages/Login';

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Route exact path='/' render={() => <Homepage />} />
        <Route path='/registration' render={() => <Registration />} />
        <Route path='/login' render={() => <Login />} />
      </MainLayout>
    </div>
  );
}

export default App;
