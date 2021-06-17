import context from '../../core/context';
import { React } from 'react';

const removeButton = (task) =>
	<button
		className="closeButton"
		onClick={ () => context.actions.removeTask(task) }
	>X</button>;

const addButton = (task) =>
	<button onClick={ () => {
		context.actions.addTaskTodo(task) ;
		context.actions.removeTask(task);
	} }
	>+</button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{addButton(task)}</span>
		<span>{text}</span>
		<span>{removeButton(task)}</span>
	</div>;
};

export default Task;
