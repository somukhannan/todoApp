import todoInput from './todoInput.js';
import todoList from './todoList.js';
import toggleAll from './toggleAlltodos.js';
import clearCompleted from './clearCompleted.js';
import filterBar from './filterBar.js';
import actionButton from './actionButton.js';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '50%',
	background: 'beige',
};

const TodoPane = () => {

	return (
	<div style={style}>
		<div>
			{toggleAll()}
			{todoInput()}
			<span>{actionButton()}</span>
		</div>
		<div>Todos: {todoList() }</div>
		<div>{ clearCompleted() }</div>
		<div>{ filterBar() }</div>
	</div>
	);
};

export default TodoPane;
