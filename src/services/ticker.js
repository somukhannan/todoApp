import context from '../core/context';
import config from '../core/config';

const ticker = () => {
	const start = () => {
		const { tickerDelay } = config;
		const { actions } = context;

		setInterval(() => {
			actions.addTask('New Task');
		}, tickerDelay);
	};

	return { start };
};

const Ticker = ticker();

export default Ticker;
