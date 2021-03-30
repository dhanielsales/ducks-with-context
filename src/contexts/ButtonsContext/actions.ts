import { Action, createActions } from '~/store/Creators/action';

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
