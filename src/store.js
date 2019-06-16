// Libs
import {
	compose,
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import updateTask from './modules/click-module';

const reducers = combineReducers({
  TodoList: updateTask,
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
