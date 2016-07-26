import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Words from './components/Words';
import Grid from './components/Grid';
import {Router, Route, browserHistory} from 'react-router';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

const routes = <Route component={App}>
	<Route path="/" component={Words} />
	<Route path="/grid" component={Grid} />
</Route>;

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
