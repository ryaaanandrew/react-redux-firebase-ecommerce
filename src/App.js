import React from 'react';
import { Route } from 'react-router-dom';
import './default.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <Route exact path='/' component={Homepage} />
        <Route path='/registration' component={Registration} />
      </MainLayout>
    </div>
  );
}

export default App;
