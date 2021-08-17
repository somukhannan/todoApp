/* eslint-disable no-magic-numbers */
import TaskManager from './taskManager';

describe('ToDo TaskManager', () => {
	const { addTask } = TaskManager;

	test('Check Returning the Tasks', () => {
		const tasks = [{ id: 'string', text: 'Sub' }];
		const task = 'Add';
		const result = addTask(tasks, task);

		expect(result.length).toBe(2);
		expect(result[0]).toMatchObject(tasks[0]);
		expect(result[1].text).toBe(task);
		expect(result[1].id).not.toBeUndefined();
	});
});
