import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import SimpleButton from './components/simpleButton';
import toDoInput from './components/toDoInput.js';
import Todo from './components/Todo.js';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state.todos);
	return (
		<div className="App">
			<div>{toDoInput()}
				<span>{SimpleButton()}</span>
			</div>
			<div>Input: { context.state.input }</div>
			<div>ToDos: { context.state.todos.map(Todo) }</div>
		</div>
	);
};

export default App;
