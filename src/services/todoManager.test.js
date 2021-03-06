/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
import TodoManager from './todoManager';
import * as random from '@laufire/utils/random';
import context from '../core/context';

describe('TodoManager Test Suite', () => {
	const {		toggleTodo,
		addTodo,
		removeTodo,
		toggleAllTodos,
		getActiveCount,
		getTodosCount,
		clearCompleted,
		getInactiveCount,
		setFilter,
		editTodo,
		isInput } = TodoManager;

	test('Check Returning the Todo', () => {
		const todos = [];
		const todo = Symbol('AddTodo');

		jest.spyOn(random, 'rndString');

		const result = addTodo(todos, todo);

		expect(result).toHaveLength(1);
		expect(result[0].completed).toBeFalsy();
		expect(result[0].text).toBe(todo);
		expect(result[0].id).not.toBeUndefined();
		expect(random.rndString).toHaveBeenCalled();
		// eslint-disable-next-line no-undef
		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);
	});

	test('toggle Todos', () => {
		const todo = { id: 's5df6dfs', text: 'Call Paul', completed: false };
		const todos = [{ id: 'sscgdfs', text: 'buy', completed: false },
			todo];

		const result = toggleTodo(todos, todo);

		// eslint-disable-next-line no-console
		console.log(result);
		// eslint-disable-next-line no-magic-numbers
		expect(result).toHaveLength(2);
		expect(result[0]).toMatchObject(todos[0]);
		expect(result[1].id).toEqual(todos[1].id);
		expect(result[1].text).toBe(todos[1].text);
		expect(result[1].completed).toBeTruthy();
	});

	test('Remove Todo', () => {
		const todo = { id: 's5df6dfs', text: 'Call Paul', completed: false };
		const todos = [{ id: 'sscgdfs', text: 'Switch Off', completed: false },
			todo];

		const result = removeTodo(todos, todo);

		// eslint-disable-next-line no-console
		console.log(result);
		// eslint-disable-next-line no-magic-numbers
		expect(result).toHaveLength(1);
		expect(result[0]).toMatchObject(todos[0]);
	});

	test('check the toggleAll service', () => {
		const todos = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dsdff', text: 'htr', completed: true },
			{ Id: 'dds3r', text: 'nrfdg', completed: false }];
		const result = toggleAllTodos(todos, true);

		expect(result).toHaveLength(3);
		result.forEach((data) => expect(data.completed).toBeTruthy());
	});

	test('getActiveCount service Check', () => {
		const todos = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dds3r', text: 'nrfdg', completed: true },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const result = getActiveCount(todos);

		expect(result).toBe(2);
	});

	test('getTodosCount service Check', () => {
		const todos = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dds3r', text: 'nrfdg', completed: true },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const result = getTodosCount(todos);

		expect(result).toBe(3);
	});

	test('clearCompleted service Check', () => {
		const todos = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dds3r', text: 'nrfdg', completed: true },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const result = clearCompleted(todos);

		expect(result).toHaveLength(2);
	});

	test('getInactiveCount service Check', () => {
		const todos = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dds3r', text: 'nrfdg', completed: true },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const result = getInactiveCount(todos);

		expect(result).toBe(1);
	});

	test('setFilter service filter All Check', () => {
		const todos = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dds3r', text: 'nrfdg', completed: true },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const result = setFilter(todos, 'All');

		expect(result).toMatchObject(todos);
	});

	test('setFilter service filter Active Check', () => {
		const active = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const completed = { Id: 'dds3r', text: 'nrfdg', completed: true };
		const todos = [...active, completed];
		const result = setFilter(todos, 'Active');

		expect(result).toMatchObject(active);
	});

	test('setFilter service filter Completed Check', () => {
		const active = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const completed = { Id: 'dds3r', text: 'nrfdg', completed: true };
		const todos = [...active, completed];
		const result = setFilter(todos, 'Completed');

		expect(result).toMatchObject([completed]);
	});

	test('setFilter service filter Completed Check', () => {
		const active = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const completed = { Id: 'dds3r', text: 'nrfdg', completed: true };
		const todos = [...active, completed];
		const result = setFilter(todos, 'Completed');

		expect(result).toMatchObject([completed]);
	});

	test('setFilter service filter Completed Check', () => {
		const active = [{ Id: 'dsfsdf', text: 'goto', completed: false },
			{ Id: 'dsdff', text: 'htr', completed: false }];
		const editing = { Id: 'dds3r', text: 'nrfdg', completed: true };
		const todos = [...active, editing];
		const result = editTodo(
			todos, editing, 'Changed'
		);

		expect(result[2].text).toBe('Changed');
	});

	describe('isInput service Check', () => {
		test('isInput Check true case', () => {
			const result = isInput('');

			expect(result).toBeTruthy();
		});

		test('isInput Check false case', () => {
			const result = isInput('string');

			expect(result).toBeFalsy();
		});
	});
});
