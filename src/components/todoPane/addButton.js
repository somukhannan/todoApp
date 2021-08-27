import { React } from 'react';
import context from '../../core/context';

const AddButton = () =>
	<button
		Role="AddButton"
		className="AddButton"
		disabled={ context.state.input === '' }
		onClick={ () => context.actions.addTodo() }
	>
		Add</button>;

export default AddButton;
