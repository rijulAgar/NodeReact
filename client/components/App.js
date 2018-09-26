import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class App extends React.Component {

	constructor() {
		super();
		// this.getData = this.getData.bind(this);
		this.state = {times:0};
		this.getData(this);
	}
	getData(ev){
		console.log('in');
		axios.get('/articles')
			.then(function(response) {
				// ev.setState({data: response.data});
				console.log(response.data);
				ev.setState({times:response.data.val})
			});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Link to={{pathname: '/art', search: '' }} style={{ textDecoration: 'none' }}>sdsdfsf</Link>
				<p className="App-intro">
					You visit {this.state.times} times
				</p>
			</div>
		);
	}
}
// export default App;