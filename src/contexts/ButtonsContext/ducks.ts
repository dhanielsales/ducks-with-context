import { Action, createActions } from '~/stores/Creators/action';
import { mainReducer } from '~/stores/Creators/reducer';

import { State } from './index';

/* /********************* ACTION TYPES /********************* */

export enum Actions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  SET_VALUE = 'SET_VALUE',
}

/********************* ACTIONS INTERFACES ***********************/

export type Increment = Action<Actions.INCREMENT>;

export type Decrement = Action<Actions.DECREMENT>;

export interface SetValue extends Action<Actions.SET_VALUE> {
  value: number;
}

/********************* GENERATE ACTIONS ***********************/

export const Creators = createActions<{
  increment: () => Increment;
  decrement: () => Decrement;
  setValue: (value: number) => SetValue;
}>(
  {
    increment: Actions.INCREMENT,
    decrement: Actions.DECREMENT,
    setValue: Actions.SET_VALUE,
  },
  {
    increment: null,
    decrement: null,
    setValue: ['value'],
  },
);

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
