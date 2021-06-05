import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import SampleService from './services/sample';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ TodoPane() }
		</div>
	);
};

export default App;
