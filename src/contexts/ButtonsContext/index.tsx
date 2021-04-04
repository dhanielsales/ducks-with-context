import { Action } from 'context-spices';
import React, { createContext, useContext, useReducer } from 'react';

import { ButtonsReducer } from './ducks';
export interface State {
  count: number;
}
interface ContextProps {
  state: State;
  dispatch?: React.Dispatch<Action>;
}

const INITIAL_STATE: State = {
  count: 0,
};

const ButtonsContext = createContext<ContextProps>({
  state: INITIAL_STATE,
});

export const ButtonsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ButtonsReducer, INITIAL_STATE);
  return <ButtonsContext.Provider value={{ state, dispatch }}>{children}</ButtonsContext.Provider>;
};

export const useButtons = () => useContext(ButtonsContext);
