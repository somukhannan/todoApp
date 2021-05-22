// import { React } from 'react';
// import context from '../core/context';
// import { rndString } from '@laufire/utils/random';

const toggleTodo = (todos, data) => todos.map((todo) =>
	(todo.id !== data.id
		? todo
		: {
			...todo,
			completed: !data.completed,
		}));

const TargetManager = {
	toggleTodo,
};

export default TargetManager;
