import { FETCH_CITIES_SUCCESS } from '../actions/cityActions';

const initialState = {
	cities: []
};

const CitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CITIES_SUCCESS: {
			return {
				...state,
				cities: action.payload.cities
			};
		}

		default: {
			return state;
		}
	}
};

export default CitiesReducer;
