import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavbarItem from './NavbarItem';

class NavbarCustom extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<Link className="navbar-brand" to="/">MedHelp</Link>
  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			    	<NavbarItem className="nav-item" for="/">
			    		<Link className="nav-link" to="/">Home</Link>
			    	</NavbarItem>
			      	<NavbarItem className="nav-item" for="/about">
			    		<Link className="nav-link" to="/about">About</Link>
			    	</NavbarItem>
			    	<NavbarItem className="nav-item" for="/pricing">
			    		<Link className="nav-link" to="/pricing">Pricing</Link>
			    	</NavbarItem>
			      {/*<li className="nav-item dropdown">
			        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Add
			        </a>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
			          <Link className="dropdown-item" to="/add/family/">Family</Link>
			          <a className="dropdown-item" href="#">Member</a>
			          <div className="dropdown-divider"></div>
			          <a className="dropdown-item" href="#">User</a>
			        </div>
			      </li>*/}
			    </ul>
			    <ul className="navbar-nav">
			    	<NavbarItem className="nav-item" for="/start">
			    		<Link className="nav-link" to="/start"><button className="btn btn-success">Start Now</button></Link>
			    	</NavbarItem>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default NavbarCustom;