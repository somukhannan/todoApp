import { React } from 'react';
import context from '../core/context';

const toDoInput = () =>
	<input
		value={ context.state.input }
		onChange={ (evt) => context.actions.setInput(evt.target.value) }
	/>;

export default toDoInput;
