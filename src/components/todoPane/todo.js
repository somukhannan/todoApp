import { React } from 'react';
import context from '../../core/context';

const sharedStyle = {
	height: '1em',
};

const completedStyle = {
	...sharedStyle,
	color: 'grey',
};

const activeStyle = {
	...sharedStyle,
	color: 'black',
};

const Todo = (todo) => {
	const { text, id, completed } = todo;

	const style = completed ? completedStyle : activeStyle;

	return <div key={ id } style={ style }>
		<span>
			<input
				type="checkbox"
				checked={ completed }
				onChange={ () => context.actions.toggleTodo(todo) }
			/>
		</span>
		<span onClick={ () => context.actions.setEditing(todo) }>
			{ text }
		</span>
		<span>
			<button	onClick={ () => context.actions.removeTodo(todo) }>
				X</button>
		</span>
	</div>;
};

export default Todo;
