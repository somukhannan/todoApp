import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const filterButton = (filter) => {
	const notodo = TodoManager.getActiveTodos(context.state.todos) === 0;

	return notodo
		? null
		: <button onClick={ () => context.actions.setFilter(filter) }>
			{filter}</button>;
};

export default filterButton;
