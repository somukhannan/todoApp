import AddButton from './addButton';
import context from '../../core/context';
import { render, fireEvent } from '@testing-library/react';

jest.mock('../../core/context', () => ({
	state: { input: Symbol('input') },
	actions: { addTodo: jest.fn() },
}));

describe('AddButton Component Check', () => {
	const { actions } = context;

	test('addbutton Check', () => {
		const component = render(AddButton()).getByRole('AddButton');

		expect(component).toBeInTheDocument();
	});

	test('addbutton Check', () => {
		const component = render(AddButton()).getByRole('AddButton');

		fireEvent.click(component);

		expect(actions.addTodo)
			.toHaveBeenCalledWith();
	});
});
