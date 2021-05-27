import { React } from 'react';
import context from '../core/context';
import todoManager from '../services/todoManager.js';

const clearCompleted = () => {
	const isCompleted
		= todoManager.getInactiveCount(context.state.todos) === 0;

	return isCompleted
		? null
		: <button onClick={ () => context.actions.clearCompleted() }>
			clear completed</button>;
};

export default clearCompleted;
