import { Action } from '~/store/Creators/action';
import { mainReducer } from '~/store/Creators/reducer';

import { Actions, SetValue } from './actions';
import { State } from './index';

/********************* ALL ACTION REDUCERS ***********************/

const setValueReducer = (state: State, { value }: SetValue): State => {
  return {
    ...state,
    count: value,
  };
};

const incrementReducer = (state: State): State => {
  return {
    ...state,
    count: state.count + 1,
  };
};

const decrementReducer = (state: State): State => {
  return {
    ...state,
    count: state.count - 1,
  };
};

/********************* MAIN STRUCTURE FOR ACTION REDUCERS ***********************/

const reducerTypes = {
  [Actions.INCREMENT]: incrementReducer,
  [Actions.DECREMENT]: decrementReducer,
  [Actions.SET_VALUE]: setValueReducer,
};

export const ButtonsReducer = (state: State, action: Action) =>
  mainReducer<State>(state, action, reducerTypes);
