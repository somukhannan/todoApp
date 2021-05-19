import { React } from 'react';
import context from '../core/context';

const toDoInput = () =>
	<input
		value={ context.state.input }
		// eslint-disable-next-line no-console
		onChange={ (evt) => context.actions.setInput(evt.target.value) }
	/>;

export default toDoInput;
