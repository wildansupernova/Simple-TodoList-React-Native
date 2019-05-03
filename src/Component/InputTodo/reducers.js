import { INITIAL_STATE } from './states';

import { UPDATE_TEXT_INPUT } from './actions';

export const InputText = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TEXT_INPUT:
      return { ...state, textInput: action.payload };
    default:
      return state;
  }
};
