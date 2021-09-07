import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const editButton = () =>
	<button
		role="editButton"
		disabled={ TodoManager.isInput() }
		onClick={ () => context.actions.editTodo() }
	>
		edit</button>;

export default editButton;
