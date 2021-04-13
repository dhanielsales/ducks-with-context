import { Action } from 'context-spices';
import React, { createContext, useContext, useReducer } from 'react';

import { ImmutableReducer } from './ducks';

export interface State {
  count: number;
}
interface ContextProps {
  state: State;
  dispatch?: React.Dispatch<Action>;
}

export const INITIAL_STATE: State = {
  count: 0,
};

const ImmutableContext = createContext<ContextProps>({
  state: INITIAL_STATE,
});

export const ImmutableProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ImmutableReducer, INITIAL_STATE);
  return (
    <ImmutableContext.Provider value={{ state, dispatch }}>{children}</ImmutableContext.Provider>
  );
};

export const useImmutable = () => useContext(ImmutableContext);
