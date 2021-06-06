import TodoManager from '../services/todoManager';

const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.addTodo(state.todos, state.input),
});

const setInput = (dummy, input) => ({
	input,
});

const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = ({ state }, todo) => ({
	todos: TodoManager.removeTodo(state.todos, todo),
});

const toggleAllTodos = ({ state }, isChecked) => ({
	todos: TodoManager.toggleAllTodos(state.todos, isChecked),
});

const clearCompleted = ({ state }) => ({
	todos: TodoManager.clearCompleted(state.todos),
});

const setFilter = (dummy, filter) => ({
	filter,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	// eslint-disable-next-line function-paren-newline
	todos: TodoManager.editTodo(state.todos, state.editing, state.input),
});

const setEditing = (dummy, todo) => ({
	editing: todo,
	input: todo.text,
});

const setTask = (dummy, tasks) => ({
	tasks,
});

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAllTodos,
	clearCompleted,
	setFilter,
	editTodo,
	setEditing,
	setTask,
};

export default actions;
