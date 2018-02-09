import * as React from 'react';
import './App.css';

import Home from './containers/Home';
import Profile from './containers/Profile';

import { Route, Link } from 'react-router-dom';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to="/">Home</Link>&nbsp;&nbsp;
          <Link to="/profile/react">Profile</Link>
        </p>
        <Route exact={true} path="/" component={Home} />
        <Route path="/profile/:name" component={Profile} />
      </div>
    );
  }
}

export default App;
