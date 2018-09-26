import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter } from 'react-router-dom'
import App from './components/App'
import Routes from './route'
ReactDOM.render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>, document.getElementById('root')
);
// ReactDOM.render(<App/>, document.getElementById('root'))