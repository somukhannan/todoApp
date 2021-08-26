/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import TaskManager from './taskManager';
import * as random from '@laufire/utils/random';
import context from '../core/context';

describe('ToDo TaskManager', () => {
	const { addTask, removeTask } = TaskManager;

	test('Check Returning the Tasks', () => {
		const tasks = [{ id: 'string', text: 'Sub' }];
		const task = 'Add';

		jest.spyOn(random, 'rndString');

		const result = addTask(tasks, task);

		expect(random.rndString).toHaveBeenCalledWith(context.config.idLength);
		expect(result.length).toBe(2);
		expect(result[0]).toMatchObject(tasks[0]);
		expect(result[1].text).toBe(task);
		expect(result[1].id).not.toBeUndefined();
	});

	test('Check Remove the Tasks', () => {
		const taskToRemove = { id: '123sdfd', text: 'Sub' };
		const tasksToRetain = [{ id: '12dsdfd', text: 'Add' },
			{ id: '12dssdfd', text: 'Mul' }];
		const tasks = [taskToRemove, ...tasksToRetain];
		const result = removeTask(tasks, taskToRemove);

		expect(result).toMatchObject(tasksToRetain);
	});

	// test('init task', () => {
	// 	const result = init();
	// 	expect(result).toHaveBeenCalled();
	// });
});
