import todoList from './todoList';
import todoManager from '../../services/todoManager';
import context from '../../core/context';
import todo from './todo.js';

jest.mock('../../core/context', () => ({
	state: { todos: ['arr'], filter: 'All' },
	actions: { setFilter: jest.fn() },
}));

describe('todoList check', () => {
	test('todolist', () => {
		const { todos, filter } = context.state;
		const mockTodo = [Symbol('a')];
		const returnvalue = Symbol('returnvalue');

		jest.spyOn(todoManager, 'setFilter').mockReturnValue(mockTodo);
		jest.spyOn(mockTodo, 'map').mockReturnValue(returnvalue);

		const result = todoList();

		expect(todoManager.setFilter).toHaveBeenCalledWith(todos, filter);
		expect(mockTodo.map).toHaveBeenCalledWith(todo);
		expect(result).toEqual(returnvalue);
	});
});
