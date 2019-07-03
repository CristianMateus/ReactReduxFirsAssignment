import * as actionTypes from '../actions';

const initialState = {
	persons: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		// Add person
		case actionTypes.ADD_PERSON:
			const newPerson = {
				id: Math.random(), // not really unique but good enough here!
				name: action.personInfo.name,
				age: action.personInfo.age
			};
			return {
				...state,
				persons: state.persons.concat(newPerson)
			};
		// Delete Person
		case actionTypes.DELETE_PERSON:
			const updatedState = state.persons.filter((person) => person.id !== action.personId);
			return {
				...state,
				persons: updatedState
			};
	}
	return state;
};

export default reducer;
