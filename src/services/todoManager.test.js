import TodoManager from './todoManager';

describe('TodoManager Test Suite', () => {
	const { addTodo, toggleTodo } = TodoManager;

	test('Check Returning the Todo', () => {
		const todos = [];
		const todo = 'AddTodo';
		const result = addTodo(todos, todo);

		expect(result).toHaveLength(1);
		expect(result[0].completed).toBeFalsy();
		expect(result[0].text).toBe(todo);
		expect(result[0].id).not.toBeUndefined();
	});

	test('toggle Todos', () => {
		const todos = [{ id: 'sd56dfs', text: 'buy', completed: false },
			{ id: 'sd56dfs', text: 'buy', completed: false }];
		const todo = { id: 'sd56dfs', text: 'buy', completed: false };
		const result = toggleTodo(todos, todo);

		expect(result).toHaveLength(1);
	});
});
