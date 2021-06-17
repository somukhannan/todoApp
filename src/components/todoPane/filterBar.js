import { React } from 'react';
import filterButton from './filterButton.js';

const filterBar = () => {
	const filters = ['All', 'Active', 'Completed'];

	return <div className="filterBar">{filters.map(filterButton)}</div>;
};

export default filterBar;
