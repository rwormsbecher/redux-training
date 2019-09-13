import {
	SET_STATE_TO_ADD_CITY,
	SET_STATE_TO_SHOWCASE
} from '../actions/applicationActions';

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

		case SET_STATE_TO_SHOWCASE: {
			return {
				...state,
				mode: 'showcase'
			};
		}

		default: {
			return state;
		}
	}
};

export default ApplicationReducer;
