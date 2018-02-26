import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavbarCustom extends Component {
	render() {
		return (
			<Navbar inverse>
				<Navbar.Header>
    				<Navbar.Brand>
      					<a href="/">MedHelp</a>
    				</Navbar.Brand>
  				</Navbar.Header>
  				<Nav>
	    			<NavItem eventKey={1} href="#">
	      				Home
	    			</NavItem>
	    			<NavItem eventKey={2} href="#">
	      				About
	    			</NavItem>
	    			<NavItem eventKey={2} href="#">
	      				Pricing
	    			</NavItem>
	    			
  				</Nav>
  				<Nav pullRight>
      				<NavItem eventKey={1} href="#">
        				Signup
      				</NavItem>
    			</Nav>
			</Navbar>
		)
	}
}

export default NavbarCustom;