import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import logo from './logo.svg';
import './App.css';
import log from './me.jpg';
import {Link} from 'react-router-dom';

class About extends Component {
	render() {
		return (
      <div className="">
        <Navbar/>
        <div className="row">
          <div className="col-8">
            <div className="jumbotron">
              <h1>What we do</h1>
                <p>
                  We provide general insurance solutions to secure you and your family against unexpected and untoward events. With MedHelp and partners, you can avail protection solutions for business, personal and project liabilities across rural as well as urban areas in India.
                </p>
              <h2>Our Vision</h2>
              <p>
              We will be the most value creating and admired risk solutions company in India, with a global footprint.
              </p>
                <p>
                  <Link to="/pricing"><button className="btn btn-warning btn-lg">Pricing</button></Link>
                </p>
            </div>
          </div>
          <div className="col-4">
            <img src={log} className="img-fluid" alt="Logo"/>
          </div>
        </div>
      </div>
		)
	}
}

export default About;