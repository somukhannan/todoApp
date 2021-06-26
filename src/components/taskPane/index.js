import { React } from 'react';
import TaskList from './taskList';

const TaskPane = () =>
<div className='pane taskPane'>
	<h3>Task</h3>
	{TaskList()}
	</div>;

export default TaskPane;
