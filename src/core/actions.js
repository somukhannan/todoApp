import TodoManager from '../services/todoManager';

const addTodo = ({ state }) => ({
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

const actions = {
	setInput,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleAllTodos,
	clearCompleted,
	setFilter,
};

export default actions;
