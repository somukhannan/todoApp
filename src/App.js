import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import AddButton from './components/AddButton';
import toDoInput from './components/toDoInput.js';
import Todo from './components/Todo.js';
import toggleAll from './components/toggleAlltodos.js';

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
			<div>Input: { context.state.input }</div>
			<div>ToDos: { context.state.todos.map(Todo) }</div>
		</div>
	);
};

export default App;
