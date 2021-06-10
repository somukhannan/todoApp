import context from '../core/context.js';
import { rndString } from '@laufire/utils/random';

const getTask = (text) => ({
	id: rndString(context.config.idLength),
	text: text,
});

const init = () => {
	context.actions.addTask('Task1');
	context.actions.addTask('Task2');
	context.actions.addTask('Task3');
};

const removeTask = (tasks, data) => tasks.filter((task) => task.id !== data.id);

const addTask = (tasks, task) => tasks.concat(getTask(task));

const taskManager = () => ({
	init,
	removeTask,
	addTask,
});

const TaskManager = taskManager();

export default TaskManager;
