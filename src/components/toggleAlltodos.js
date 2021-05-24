/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import TargetManager from '../services/todoManager';

const toggleAll = () => {
	const isChecked = TargetManager.getActiveChecked(context.state.todos) === 0;
	const noToDos = TargetManager.getActiveTodos(context.state.todos) === 0;

	return noToDos
		? null
		: <input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleAllTodos(!isChecked) }
		  />;
};

export default toggleAll;
