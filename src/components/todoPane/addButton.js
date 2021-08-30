import { React } from 'react';
import context from '../../core/context';
import todoManager from '../../services/todoManager.js';

const AddButton = () =>
	<button
		role="AddButton"
		className="AddButton"
		disabled={ todoManager.isInput(context.state.input) }
		onClick={ () => context.actions.addTodo() }
	>
		Add</button>;

export default AddButton;
