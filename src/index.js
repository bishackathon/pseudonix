import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from 'react-router-dom';

//import { Router } from 'react-router-dom';

ReactDOM.render((
	<Router>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/pricing" component={Pricing}/>
		</Switch>
	</Router>), document.getElementById('root'))

registerServiceWorker();
