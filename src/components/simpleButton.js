import { React } from 'react';
import context from '../core/context';

const SimpleButton = () =>
	<button onClick={ () => context.actions.addToDo(context.state.input) }>
		Add</button>;

export default SimpleButton;
