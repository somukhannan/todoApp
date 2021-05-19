const addToDo = ({ state }, input) => ({
	todos: state.todos.concat({ text: input, id: Date.now() }),
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
