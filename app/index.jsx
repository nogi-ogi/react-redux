import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import uuid from 'uuid';

import reducer from './reducer';

import App from './components/App';
import Words from './components/Words';
import Grid from './components/Grid';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({type: 'ADD_USER'});

const routes = <Route>
	<Route path="/" component={Words} />
	<Route path="/grid" component={Grid} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app'));