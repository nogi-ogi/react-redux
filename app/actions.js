export function addWord () {
	return {
		type: 'ADD_USER'
	}
}

export function addInput(input){
	return {
		type: 'ADD_INPUT',
		payload: {
			answer: input
		}
	}
}