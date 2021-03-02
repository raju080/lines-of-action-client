import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Board from './board';

const store = createStore(
	combineReducers({
		board: Board,
	}),
	applyMiddleware(logger, thunk)
);

export default store;