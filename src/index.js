import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import StartNow from './StartNow';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createHistory from 'history/createBrowserHistory';
//import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import rootReducer from './reducers/index';
import {sendForm} from './actions/index';

import config from './firebase/config';
import * as firebase from 'firebase';

firebase.initializeApp(config);

window.sendForm = sendForm;

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    app: rootReducer,
    router: routerReducer
  }),
  applyMiddleware(
  	rMiddleware,
  	thunk,
  	logger
  	)
)

window.store = store;

ReactDOM.render((
	<Provider store={store}>
	<ConnectedRouter history={history}>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/about" component={About}/>
			<Route path="/pricing" component={Pricing}/>
			<Route path="/start" component={StartNow}/>
		</Switch>
	</ConnectedRouter>
	</Provider>), document.getElementById('root'))

registerServiceWorker();
