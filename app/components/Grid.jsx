import React from 'react';
import {Link} from 'react-router';

export default class Grid extends React.Component {
  	render() {
  		return (
  			<div>
          		<Link to="/"><button className="grow-words" onClick={() => console.log('find moar words')}> Will I Be rendered?</button></Link>
  			</div>
  		);
  	}
}