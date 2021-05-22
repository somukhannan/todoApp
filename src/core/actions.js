import context from '../core/context';
import { rndString } from '@laufire/utils/random';
import TargetManager from '../services/todoManager';
const randomStringLen = 8;

const addToDo = ({ state }) => ({
	todos: state.todos.concat({ text: context.state.input,
		id: rndString(randomStringLen), completed: false }),
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
