// Action Types
export const CLICK_UPDATE_VALUE = 'update/tasks/CLICK_UPDATE_VALUE';

// Initial State
const initialState = {
  newValue: ''
};

// Reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          newValue: action.value,
        },
      };
    default:
      return state;
  }
};

// Action Creators
export const updateTask = value => ({
	type: CLICK_UPDATE_VALUE,
  value,
});

