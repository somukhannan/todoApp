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

const TargetManager = {
	toggleTodo,
	addToDo,
	toDoRemoval,
};

export default TargetManager;
