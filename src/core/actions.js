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

const actions = {
	setInput,
	addToDo,
	toggleTodo,
};

export default actions;
