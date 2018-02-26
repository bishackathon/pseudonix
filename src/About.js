import React, { Component } from 'react';
import Navbar from './Navbar';
import logo from './logo.svg';
import './App.css';
import log from './me.jpg';
import { Jumbotron, Button } from 'react-bootstrap';

class About extends Component {
	render() {
		return (
      <div className="margin">
      <Navbar/>
      <div className="imgs">
        <img src={log} alt="Logo"/>
        <img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/119/16/sb10063567u-001.jpg" alt=""/>
        </div>
        <Jumbotron>
          <h1>What we do</h1>
            <p>
              We provide general insurance solutions to secure you and your family against unexpected and untoward events. With MedHelp and partners, you can avail protection solutions for business, personal and project liabilities across rural as well as urban areas in India.
              our vision- We will be the most value creating and admired risk solutions company in India, with a global footprint.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
        </Jumbotron>;
      </div>
		)
	}
}

export default About;