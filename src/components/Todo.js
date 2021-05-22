import { React } from 'react';

const Todo = (todo) => {
	const { text, id } = todo;

	return <div key={ id }>
		<span>
			<input type="checkbox"/>
		</span>
		<span>
			{ text }
		</span>
	</div>;
};

export default Todo;
