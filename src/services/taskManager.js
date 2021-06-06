import context from '../core/context.js';
import { rndString } from '@laufire/utils/random';

const getTask = (text) => ({
	id: rndString(context.config.idLength),
	text: text,
});

const taskManager = () => ({
	init: () => context.actions.setTask([
		getTask('Task1'),
		getTask('Task2'),
		getTask('Task3'),
	]), // eslint-disable-line no-console
});

const TaskManager = taskManager();

export default TaskManager;
