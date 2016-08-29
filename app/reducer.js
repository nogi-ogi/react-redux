import * as types from './actions';

const initialState = [];

export default function(state = initialState, action){
	switch (action.type) {
		case 'CREATE_WORD':
			return [...state, action.word];
		default:
			return state;
	}
}