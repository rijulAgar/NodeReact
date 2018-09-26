import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import ArticleShow from './components/ArticleShow';
export const Routes = () => (
	<Switch>
		<Route exact path='/' component={App} />
		<Route exact path='/art' component={ArticleShow} />
	</Switch>
);
export default Routes;