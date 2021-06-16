import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const filterButton = (filter) => {
	const isTodos = TodoManager.getTodosCount(context.state.todos) === 0;
	const className = `${ filter !== context.state.filter ? 'filterButton-default' : 'filterButton-selected' }`;

	return isTodos
		? null
		: <span>
			<button
				className={ className }
				onClick={ () => context.actions.setFilter(filter) }
			>
				{filter}</button>
		</span>;
};

export default filterButton;
