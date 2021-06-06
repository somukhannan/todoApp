import context from '../../core/context';
import { React } from 'react';
import task from './task.js';

const TaskList = () => {
	const { tasks } = context.state;

	return <div>
		{ tasks.map(task) }
	</div>;
};

export default TaskList;
