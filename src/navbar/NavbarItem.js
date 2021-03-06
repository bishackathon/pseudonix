import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { location: state.router.location };
};

class NavbarItem extends Component {
	render() {
		const forLoc = this.props.for;
		if (this.props.classWhenActive) {
			const classWhenActive = this.props.classWhenActive;
		}
		const active = this.props.location.pathname == forLoc ? " active ": "";
		return (
			<li className={this.props.className + active + this.classWhenActive}>
				{this.props.children}
			</li>
		)
	}
}

const ConnectedNavbarItem = connect(mapStateToProps)(NavbarItem);
export default ConnectedNavbarItem;