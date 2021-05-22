import { React } from 'react';
import context from '../core/context';

const Todo = (todo) => {
	const { text, id, completed } = todo;

	return <div key={ id }>
		<span>
			<input
				type="checkbox"
				defaultChecked={ completed }
				onChange={ () => context.actions.toggleTodo(todo) }
			/>
		</span>
		<span>
			{ text }
		</span>
	</div>;
};

export default Todo;
