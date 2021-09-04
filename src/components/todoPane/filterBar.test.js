/* eslint-disable no-console */
import { React } from 'react';
import { render } from '@testing-library/react';
import filterBar from './filterBar';
import filterButton from './filterButton.js';

// jest.mock('./filterButton.js', () => ({
// 	__esModule: true,
// 	default: jest.fn().mockImplementation((filter) => {
// 		console.log(filter);
// 		return <div key={ filter } role={ filter }/>;
// 	}),
// }));

jest.mock('./filterButton.js', () =>
	jest.fn().mockImplementation((filter) => {
		console.log(filter);
		return <div key={ filter } role={ filter }/>;
	}));

describe('filterBar Check', () => {
	// console.log(filterButton('All'));
	test('filterBar component Check', () => {
		const component = render(filterBar()).getByRole('filterBar');

		expect(component).toBeInTheDocument();
	});
	test.only('filterBar map component check', () => {
		const rendered = render(filterBar());
		const component = rendered.getByRole('filterBar');

		['All', 'Active', 'Completed'].forEach((filter) => {
			const button = rendered.getByRole(filter);

			expect(filterButton).toHaveBeenCalledWith(filter);
			expect(button).toBeInTheDocument();
		});

		expect(component).toHaveClass('filterBar');
	});
});
