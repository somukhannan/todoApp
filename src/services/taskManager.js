import context from '../core/context.js';
import { rndString } from '@laufire/utils/random';

const taskManager = () => ({
	init: () => context.actions.setTask([
		{
			id: rndString(context.config.idLength),
			text: 'Task1',
		},
	]), // eslint-disable-line no-console
});

const TaskManager = taskManager();

export default TaskManager;
