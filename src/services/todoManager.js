import { rndString } from '@laufire/utils/random';
const randomStringLen = 8;

const addTodo = (todos, input) => todos.concat({
	text: input,
	id: rndString(randomStringLen),
	completed: false,
});

const toggleTodo = (todos, data) => todos.map((todo) =>
	(todo.id !== data.id
		? todo
		: {
			...todo,
			completed: !data.completed,
		}));

const removeTodo = (todos, todo) => todos.filter((current) =>
	current.id !== todo.id);

const toggleAllTodos = (todos, ischecked) =>
	todos.map((todo) => ({ ...todo, completed: ischecked }));

const getActiveCount = (data) =>
	data.filter((todo) => !todo.completed).length;

const getTodosCount = (data) => data.length;

const clearCompleted = (todos) => todos.filter((todo) => !todo.completed);

const getInactiveCount = (todos) =>
	todos.filter((todo) => todo.completed).length;

const filters = {
	All: () => true,
	Active: (todo) => !todo.completed,
	Completed: (todo) => todo.completed,
};

const setFilter = (todos, filter) => todos.filter(filters[filter]);

const TodoManager = {
	toggleTodo,
	addTodo,
	removeTodo,
	toggleAllTodos,
	getActiveCount,
	getTodosCount,
	clearCompleted,
	getInactiveCount,
	setFilter,
};

export default TodoManager;
