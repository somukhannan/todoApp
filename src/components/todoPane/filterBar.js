import filterButton from './filterButton.js';

const filterBar = () => {
	const filters = ['All', 'Active', 'Completed'];

	return filters.map(filterButton);
};

export default filterBar;
