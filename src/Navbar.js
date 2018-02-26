import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";


class NavbarCustom extends Component {
	render() {
		return (
			<Navbar inverse>
				<Navbar.Header>
    				<Navbar.Brand>
      					<LinkContainer to="/">
	    					<p>MedHelp</p>
	    				</LinkContainer>
    				</Navbar.Brand>
  				</Navbar.Header>
  				<Nav>
	    			<NavItem eventKey={1}>
	    			<LinkContainer to="/">
	    				<p>Home</p>
	    			</LinkContainer>
	    			</NavItem>
	    			<NavItem eventKey={2}>
	      				<LinkContainer to="/about">
	    					<p>About</p>
	    				</LinkContainer>
	    			</NavItem>
	    			<NavItem eventKey={2}>
	      				<LinkContainer to="/pricing">
	    					<p>Pricing</p>
	    				</LinkContainer>
	    			</NavItem>
	    			
  				</Nav>
  				<Nav pullRight>
      				<NavItem eventKey={1} href="https://form.jotform.me/80559471861465" target="_blank">
        				<a className="btn btn-primary">Signup</a>
      				</NavItem>
    			</Nav>
			</Navbar>
		)
	}
}

export default NavbarCustom;