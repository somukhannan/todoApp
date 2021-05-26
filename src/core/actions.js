import TodoManager from '../services/todoManager';

const addToDo = ({ state }) => ({
	todos: TodoManager.addToDo(state.todos, state.input),
});

const setInput = (dummy, input) => ({
	input,
});

const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const toDoRemoval = ({ state }, todo) => ({
	todos: TodoManager.toDoRemoval(state.todos, todo),
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
	addToDo,
	toggleTodo,
	toDoRemoval,
	toggleAllTodos,
	clearCompleted,
	setFilter,
};

export default actions;
