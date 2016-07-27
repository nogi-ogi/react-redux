import React from 'react';
//import {List} from 'immutable';

export default class App extends React.Component {
  	render() {
  		return React.cloneElement(this.props.children);
  	}
}