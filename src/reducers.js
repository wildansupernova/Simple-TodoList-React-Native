import { combineReducers } from 'redux';

import { TodosReducer } from './Component/Todos/reducers';
import { InputText } from './Component/InputTodo/reducers';

export const rootReducer = combineReducers({
  todos: TodosReducer,
  textBox: InputText,
});
