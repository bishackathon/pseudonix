import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import {connect} from 'react-redux';
import {sendForm} from './actions/index';

const mapStateToProps = state => {
	return {
		insurance: state.app.insurance
	}
}

const mapDispatchToProps = dispatch => {
	return {
		submitForm: data => dispatch(sendForm(data))
	}
}

class StartNow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			date: "",
			phone: "",
			amount: 50000
		}
		this.updateName = this.updateName.bind(this);
		this.updateDate = this.updateDate.bind(this);
		this.updatePhone = this.updatePhone.bind(this);
		this.updateAmount = this.updateAmount.bind(this);
		this.form = this.form.bind(this);
	}
	updateName(e) {
		e.preventDefault();
		this.setState({name: e.target.value})
	}
	updateDate(e) {
		e.preventDefault();
		this.setState({date: e.target.value})
	}
	updatePhone(e) {
		e.preventDefault();
		this.setState({phone: e.target.value})
	}
	updateAmount(e) {
		e.preventDefault();
		this.setState({amount: e.target.value})
	}
	form(e) {
		e.preventDefault();
		this.props.submitForm(this.state)
	}
	render() {
		if (this.props.insurance.loading == false && this.props.insurance.success == false) {
			return (
				<div>
				<Navbar/>
				<div className="container">
				<h1>Apply now to get your insurance claim.</h1>
				<h2><span className="badge badge-secondary">Insurance starts with you...</span></h2>
				<form>
					<div className="form-group">
						<label for="name">Full Name</label>
						<input className="form-control" type="text" id="name" value={this.state.name} required onChange={this.updateName}/>
					</div>
					<div className="form-group">
						<label for="date">Date of Birth</label>
						<input className="form-control" type="text" id="date" placeholder="dd/mm/yyyy" value={this.state.date} required onChange={this.updateDate}/>
					</div>
					<div className="form-group">
						<label for="phone">Phone number</label>
						<div className="input-group mb-3">
						<div className="input-group-prepend">
    						<span className="input-group-text">+91</span>
  						</div>
						<input placeholder="000-000-0000" required id="phone" className="form-control" type="text" value={this.state.phone} onChange={this.updatePhone}/>
						</div>
					</div>
					<div className="form-group">
						<label for="amount">Amount to be insured</label>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
	    						<span className="input-group-text">INR</span>
	  						</div>
							<input min="1000" max="200000" step="10" placeholder="Amount" required id="amount" className="form-control" type="number" value={this.state.amount} onChange={this.updateAmount}/>
						</div>
					</div>
					<div className="form-group">
					<div className="form-check">
  						<input className="form-check-input" type="checkbox" id="defaultCheck1" required/>
 						<label className="form-check-label" for="defaultCheck1">
    						By ticking this checkbox, you agree that the data entered above can be used to contact you and might be shared with partners in order to provide a better service. 
    						All information is processed under our Privacy Policy.
  						</label>
					</div>
					</div>
					<div className="form-group">
						<input type="submit" className="btn btn-success btn-lg col-12" onClick={this.form}/>
					</div>
				</form>
				</div>
			</div>
			)
		} else {
			if (this.props.insurance.loading == true && this.props.insurance.success == false) {
				return (
					<div>
					<Navbar/>
					<div className="container">
					<h1>SENDING INFO</h1>
					</div>
					</div>
				)
			}
			else {
				return (
					<div>
					<Navbar/>
					<div className="container">
					<h1>SUCCESS</h1>
					<a href="/"><button className="btn btn-lg btn-success">Go Home</button></a>
					</div>
					</div>
				)
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartNow)