/* eslint-disable max-len */
import todoManager from '../../services/todoManager';
import clearCompleted from './clearCompleted.js';
import context from '../../core/context';
import { render, fireEvent } from '@testing-library/react';

jest.mock('../../core/context', () => ({
	state: { todos: Symbol('todos') },
	actions: { clearCompleted: jest.fn() },
}));

describe('Clear Completed Test Check', () => {
	const { actions } = context;

	test('do button called or not', () => {
		jest.spyOn(todoManager, 'getInactiveCount').mockReturnValue(0);

		const result = clearCompleted();

		expect(todoManager.getInactiveCount).toHaveBeenCalledWith(context.state.todos);

		expect(result).toBeNull();
	});

	test('do button called or not', () => {
		jest.spyOn(todoManager, 'getInactiveCount').mockReturnValue(1);

		const component = render(clearCompleted()).getByRole('ClearButton');

		fireEvent.click(component);

		expect(component).toBeInTheDocument();
		expect(actions.clearCompleted).toHaveBeenCalledWith();
	});
});
