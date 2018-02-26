import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar'
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';

import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App margin">
        <Navbar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MedHelp Insurance and Healthcare</h1>
        </header>
        <Jumbotron>
          <h1>Affordable, reliable medical insurance</h1>
            <p>
            We are an online health insurance company that provides customers the access to share their medical information with us and then based on that they can get suitable health insurance plans. 
            Sign up now to get your free quotation! 
            </p>
            <p>
              <LinkContainer to="/about">
              <Button bsStyle="primary">Learn more</Button>
              </LinkContainer>
            </p>
        </Jumbotron>;
      </div>
    );
  }
}

export default App;