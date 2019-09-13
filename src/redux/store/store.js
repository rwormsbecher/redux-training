import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import applicationReducer from '../reducers/applicationReducer';

const rootReducer = combineReducers({
	applicationSlice: applicationReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createMyStore = function configureStore() {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};

export default createMyStore;
