import context from '../core/context';

const addToDo = ({ state }) => ({
	todos: state.todos.concat({ text: context.state.input, id: Date.now() }),
});

const setInput = (dummy, input) => ({
	input,
});

const increaseCount = ({ state }) => ({
	count: state.count + 1,
});

const actions = {
	increaseCount,
	setInput,
	addToDo,
};

export default actions;
