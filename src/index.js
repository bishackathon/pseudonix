import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
//import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import rootReducer from './reducers/index';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    rootReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

window.store = store;

//import { Router } from 'react-router-dom';

ReactDOM.render((
	<Provider store={store}>
	<ConnectedRouter history={history}>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/pricing" component={Pricing}/>
		</Switch>
	</ConnectedRouter>
	</Provider>), document.getElementById('root'))

registerServiceWorker();
