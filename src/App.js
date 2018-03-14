import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './navbar/Navbar'
import './App.css';

import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MedHelp Insurance and Healthcare</h1>
        </header>
        </div>
        <div className="jumbotron">
          <h1 className="display-4">Affordable, reliable medical insurance</h1>
          <h3><span className="badge badge-secondary">Now Available</span></h3>
          <p className="lead">MedHelp: India's most robust and straightforward insurance claim platform</p>
          <hr className="my-4"/>
          <p>We are an online health insurance company that provides customers the access to share their medical information with us and then based on that they can get suitable health insurance plans. 
            Sign up now to get your free quotation! </p>
          <p className="lead">
            <Link to="/about">
              <button className="btn btn-primary btn-lg">Learn more</button>
            </Link>
          </p>
    
        </div>
      </div>
    );
  }
}

export default App;