import { INITIAL_STATE } from './states';

import { UPDATE_DATA_TODOS } from './actions';

export const TodosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATA_TODOS:
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};
