import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import AddButton from './components/AddButton';
import toDoInput from './components/toDoInput.js';
import todoList from './components/todoList.js';
import toggleAll from './components/toggleAlltodos.js';
import clearCompleted from './components/clearCompleted.js';
import filterBar from './components/filterBar.js';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App">
			<div>
				{toggleAll()}
				{toDoInput()}
				<span>{AddButton()}</span>
			</div>
			<div>ToDos: {todoList() }</div>
			<div>{ clearCompleted() }</div>
			<div>{ filterBar() }</div>
		</div>
	);
};

export default App;
