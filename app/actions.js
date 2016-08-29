import uuid from 'uuid';

export const CREATE_WORD = 'CREATE_WORD';
export function addWord(word){
	return {
		type: 'CREATE_WORD',
		word: {
			id: uuid.v4(),
			...word
		}
	}
}

export const UPDATE_WORD = 'UPDATE_WORD';
export function updateWord(word){
	return {
		type: 'UPDATE_WORD',
		...word
	}
}


export const DELETE_WORD = 'DELETE_WORD';
export function deleteWord(id){
	return {
		type: DELETE_WORD,
		id
	}
}