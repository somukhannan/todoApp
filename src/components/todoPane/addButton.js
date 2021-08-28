import { React } from 'react';
import context from '../../core/context';
import todoManager from '../../services/todoManager.js';

const AddButton = () =>
	<button
		Role="AddButton"
		className="AddButton"
		disabled={ todoManager.isInput() }
		onClick={ () => context.actions.addTodo() }
	>
		Add</button>;

export default AddButton;
