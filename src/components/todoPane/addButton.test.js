/* eslint-disable max-lines-per-function */
import AddButton from './addButton';
import context from '../../core/context';
import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../services/todoManager';

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

	describe('disbaled Check', () => {
		test('disabled Check false Case', () => {
			jest.spyOn(TodoManager, 'isInput').mockReturnValue(true);

			const component = render(AddButton()).getByRole('AddButton');

			expect(component).toBeDisabled();
		});

		test('disabled Check true case', () => {
			jest.spyOn(TodoManager, 'isInput').mockReturnValue(false);

			const component = render(AddButton()).getByRole('AddButton');

			expect(component).not.toBeDisabled();
		});
	});
});
