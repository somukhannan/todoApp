import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	input: '',
	todos: [],
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
};

export default seed;
