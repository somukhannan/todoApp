const setInput = (dummy, input) => ({
	input,
});

const increaseCount = ({ state }) => ({
	count: state.count + 1,
});

const actions = {
	increaseCount,
	setInput,
};

export default actions;
