import { React } from 'react';
import context from '../../core/context';

const getEnterkeyAction = () => (context.state.editing
	? 'editTodo'
	: 'addTodo');

const actionKeys = {
	Enter: () => context.actions[getEnterkeyAction()](),
	Escape: () => context.actions.setInput(''),
};

const todoInput = () =>
	<input
		value={ context.state.input }
		onChange={ (evt) => context.actions.setInput(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default todoInput;
