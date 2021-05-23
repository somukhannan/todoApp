/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';

const getActiveChecked = (data) =>
	data.filter((todo) => !todo.completed).length;

const toggleAll = () => {
	const ischecked = getActiveChecked(context.state.todos) === 0;

	return <input
		type="checkbox"
		checked={ ischecked }
		onChange={ () => context.actions.toggleAllTodos(!ischecked) }
	       />;
};

export default toggleAll;
