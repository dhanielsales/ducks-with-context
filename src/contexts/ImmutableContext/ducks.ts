import { Action, createActions, createReducer } from 'context-spices';
import produce from 'immer';

import { State } from './index';

export enum TypesNames {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  SET_VALUE = 'SET_VALUE',
}

export type Increment = Action<TypesNames.INCREMENT>;

export type Decrement = Action<TypesNames.DECREMENT>;

export interface SetValue extends Action<TypesNames.SET_VALUE> {
  value: number;
}

export const Creators = createActions<{
  increment: () => Increment;
  decrement: () => Decrement;
  setValue: (value: number) => SetValue;
}>(
  {
    increment: TypesNames.INCREMENT,
    decrement: TypesNames.DECREMENT,
    setValue: TypesNames.SET_VALUE,
  },
  {
    increment: null,
    decrement: null,
    setValue: ['value'],
  },
);

const setValueReducer = produce(
  (state: State, { value }: SetValue): State => {
    return {
      ...state,
      count: value,
    };
  },
);

const incrementReducer = produce(
  (state: State): State => {
    return {
      ...state,
      count: state.count + 1,
    };
  },
);

const decrementReducer = produce(
  (state: State): State => {
    return {
      ...state,
      count: state.count - 1,
    };
  },
);

const reducerTypes = {
  [TypesNames.INCREMENT]: incrementReducer,
  [TypesNames.DECREMENT]: decrementReducer,
  [TypesNames.SET_VALUE]: setValueReducer,
};

export const ImmutableReducer = (state: State, action: Action) =>
  createReducer<State>(state, action, reducerTypes);
