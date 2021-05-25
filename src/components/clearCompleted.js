import { React } from 'react';
import context from '../core/context';

const clearCompleted = () =>
	<button onClick={ () => context.actions.clearCompleted() }>
		clear completed</button>;

export default clearCompleted;
