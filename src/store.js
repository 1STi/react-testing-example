// Libs
import {
	compose,
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import Tasks from './modules/tasks-module';

const reducers = combineReducers({
  todo: Tasks,
});

export default function configureStore(initialState) {
	const bundle = compose(applyMiddleware(
		thunkMiddleware,
	));
	const createStoreWithMiddleware = bundle(createStore);
	const store = createStoreWithMiddleware(
		reducers,
		initialState,
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	);

	if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept(reducers, () => {
				store.replaceReducer(reducers);
			});
		}
	}

	return store;
}
