import context from '../../core/context';
import { React } from 'react';

const removeButton = (task) =>
	<button onClick={ () => context.actions.removeTask(task) }>X</button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{text}</span>
		<span>{removeButton(task)}</span>
	</div>;
};

export default Task;
