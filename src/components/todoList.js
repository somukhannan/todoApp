import context from '../core/context';
import TodoManager from '../services/todoManager';
import todo from './todo.js';

const todoList = () => {
	const { filter, todos } = context.state;
	const filteredTodo = TodoManager.setFilter(todos, filter);

	return filteredTodo.map(todo);
};

export default todoList;
