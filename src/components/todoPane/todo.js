import { React } from 'react';
import context from '../../core/context';

const Todo = (todo) => {
	const { text, id, completed } = todo;

	const className = `todo ${ completed ? 'todo-completed' : 'todo-active' }` ;

	return <div key={ id } className={ className }>
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
