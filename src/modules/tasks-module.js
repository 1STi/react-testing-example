// Action Types
export const ADD_TASK = 'tests/tasks/ADD_TASK';

// Initial State
const initialState = {
  tasks: []
};

// Reducer
export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_TASK:
		return Object.assign({}, state, {
			tasks: state.tasks,
		});
	default:
		return state;
	}
}

// Action Creators
export const addTask = info => ({
	type: ADD_TASK,
	info,
});
