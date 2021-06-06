import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import TaskManager from './services/taskManager.js';
import TaskPane from './components/taskPane';

const App = () => {
	useEffect(TaskManager.init, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
