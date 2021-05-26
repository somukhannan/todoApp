import { rndString } from '@laufire/utils/random';
const randomStringLen = 8;

const addToDo = (todos, input) => todos.concat({
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

const toDoRemoval = (todos, todo) => todos.filter((current) =>
	current.id !== todo.id);

const toggleAllTodos = (todos, ischecked) =>
	todos.map((todo) => ({ ...todo, completed: ischecked }));

const getActiveChecked = (data) =>
	data.filter((todo) => !todo.completed).length;

const getActiveTodos = (data) => data.length;

const clearCompleted = (todos) => todos.filter((todo) => !todo.completed);

const clearCompletedCount = (todos) =>
	todos.filter((todo) => todo.completed).length;

const filters = {
	All: () => true,
	Active: (todo) => !todo.completed,
	Completed: (todo) => todo.completed,
};

const setFilter = (todos, filter) => todos.filter(filters[filter]);

const TodoManager = {
	toggleTodo,
	addToDo,
	toDoRemoval,
	toggleAllTodos,
	getActiveChecked,
	getActiveTodos,
	clearCompleted,
	clearCompletedCount,
	setFilter,
};

export default TodoManager;
