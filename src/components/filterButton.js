import { React } from 'react';
import context from '../core/context';

const filterButton = (filter) =>

	<button onClick={ () => context.actions.setFilter(filter) }>
		{filter}</button>;

export default filterButton;
