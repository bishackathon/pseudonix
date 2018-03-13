import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import logo from './logo.svg';
import './App.css';
import log from './me.jpg';
import {Link} from 'react-router-dom';

class Pricing extends Component {
	render() {
		return (
      <div className="">
      <Navbar/>
      <div className="jumbotron">
      <h1><b>Health Insurance Premium Calculator</b></h1>

      <p>
        Health Insurance Plans are designed to offer wider health coverage to reduce the burden on finances at the time of medical emergency. Before buying a health insurance policy online, it’s advisable to read the list of coverage, exclusion and waiting periods. Similarly, calculating the premium amount is equally important.  Health Insurance premium calculator helps you compare between various plans based upon your requirements.  Though, premium shouldn’t be the only factor in choosing health insurance plans. It helps you know the quotes to pick the right plan.
		  </p>

      <a className="btn btn-primary" href="https://www.hdfcergo.com/OnlineProducts/HealthOnline/HSP-CIP/HSPCalculatePremium.aspx">Click here to get premium quotation (HDFCErgo)</a>
      <hr/>
      <Link to="/start"><button className="btn btn-success btn-lg">Start Now</button></Link>
      </div>
      </div>
    )
	}
}

export default Pricing;