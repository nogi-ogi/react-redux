import uuid from 'uuid';

export default function(state = [{
	id: null,
	answer: null,
	d: null,
	n: null,
	x: null,
	y: null,
	clue: null
}], action){
	switch (action.type) {
		case 'ADD_USER':
			var newState = state.concat([{id: uuid.v4(),answer: "new word", d:'', n:'', x:'', y:'', clue:""}]);
			return newState;
		case 'ADD_INPUT':
			return state.concat([{id: uuid.v4(),answer: action.payload.answer, d:'', n:'', x:'', y:'', clue:""}]);
		default:
			return state;
	}
}