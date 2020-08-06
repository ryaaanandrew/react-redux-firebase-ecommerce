import React from 'react';
import { Route } from 'react-router-dom';
import './default.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import MainLayout from './components/Layout/MainLayout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Route exact path='/' render={() => <Homepage />} />
        <Route path='/registration' render={() => <Registration />} />
      </MainLayout>
    </div>
  );
}

export default App;
