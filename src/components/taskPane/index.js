import { React } from 'react';
import TaskList from './taskList';

const style = {
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '50%',
	background: 'bisque',
};

const TaskPane = () =>
<div style={style}>
	<h3>Task</h3>
	{TaskList()}
	</div>;

export default TaskPane;
