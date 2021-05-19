import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import SimpleButton from './components/simpleButton';
import toDoInput from './components/toDoInput.js';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>Count: { context.state.count }</div>
			<div>{ SimpleButton() }</div>
			<div>{toDoInput()}</div>
			<div>Input: { context.state.input }</div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
