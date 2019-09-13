import { SET_STATE_TO_ADD_CITY } from '../actions/applicationActions';

const initialState = {
	mode: 'showcase'
};

const ApplicationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_STATE_TO_ADD_CITY: {
			return {
				...state,
				mode: 'addCity'
			};
		}

		default: {
			return state;
		}
	}
};

export default ApplicationReducer;
