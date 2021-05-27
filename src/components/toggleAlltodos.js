/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import TargetManager from '../services/todoManager';

const toggleAll = () => {
	const isChecked = TargetManager.getActiveCount(context.state.todos) === 0;
	const isTodos = TargetManager.getTodosCount(context.state.todos) === 0;

	return isTodos
		? null
		: <input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleAllTodos(!isChecked) }
		  />;
};

export default toggleAll;
