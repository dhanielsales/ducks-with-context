import { Action } from './action';

export type Reducer = (...args: any[]) => any;

export const mainReducer = <State>(
  state: State,
  action: Action,
  reducerTypes: {
    [key: string]: (state: State, payload?: any) => State;
  },
): State => {
  const reducer: Reducer = reducerTypes[action.type];
  return reducer ? reducer(state, action.payload) : state;
};
