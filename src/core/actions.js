import TargetManager from '../services/todoManager';

const addToDo = ({ state }) => ({
	todos: TargetManager.addToDo(state.todos, state.input),
});

const setInput = (dummy, input) => ({
	input,
});

const toggleTodo = ({ state }, todo) => ({
	todos: TargetManager.toggleTodo(state.todos, todo),
});

const toDoRemoval = ({ state }, todo) => ({
	todos: TargetManager.toDoRemoval(state.todos, todo),
});

const actions = {
	setInput,
	addToDo,
	toggleTodo,
	toDoRemoval,
};

export default actions;
