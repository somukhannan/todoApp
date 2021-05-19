import { React } from 'react';

const Todo = (todo) => {
	const { text, id } = todo;

	return <div key={ id }> { text } </div>;
};

export default Todo;
