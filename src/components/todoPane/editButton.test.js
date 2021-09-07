import editButton from './editButton';
import { render, fireEvent } from '@testing-library/react';
import context from '../../core/context';

jest.mock('../../core/context', () => ({
	state: { input: Symbol('editButton') },
	actions: { editTodo: jest.fn() },
}));

describe('EditButton Component Check', () => {
	const { actions } = context;

	test('EditButton component render check', () => {
		const component = render(editButton()).getByRole('editButton');

		expect(component).toBeInTheDocument();
	});

	test('click check', () => {
		const component = render(editButton()).getByRole('editButton');

		fireEvent.click(component);

		expect(actions.editTodo).toHaveBeenCalled();
	});
});
