import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import MainLayout from './components/Layout/MainLayout';
import Login from './pages/Login';

const initialState = {
  user: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  };

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      };

      this.setState({
        ...initialState
      })
    });
  };

  componentWillUnmount() {
    console.log('unmounting...')
    this.authListener()
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="app">
        <MainLayout currentUser={ currentUser }>
          <Route exact path='/' render={() => <Homepage />} />
          <Route path='/registration' render={() => <Registration />} />
          <Route 
            path='/login' 
            render={() => currentUser ? <Redirect to='/' /> : <Login />} 
          />
        </MainLayout>
      </div>
    );
  };
};

export default App;
