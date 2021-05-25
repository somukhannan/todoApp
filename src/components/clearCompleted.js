import { React } from 'react';
import context from '../core/context';
import todoManager from '../services/todoManager.js';

const clearCompleted = () => {
	const notCompleted
		= todoManager.clearCompletedCount(context.state.todos) === 0;

	return notCompleted
		? null
		: <button onClick={ () => context.actions.clearCompleted() }>
			clear completed</button>;
};

export default clearCompleted;
