import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
	render() {
		return (
      <div>
      <Navbar/>
			<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MedHelp Insurance and Healthcare</h1>
        </header>
        <p className="App-intro">
          To get started, efffdit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </div>
		)
	}
}

export default Home;