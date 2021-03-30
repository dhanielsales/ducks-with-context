import React, { createContext, useContext, useReducer } from 'react';

import { Action } from '~/store/Creators/action';

import { ButtonsReducer } from './ducks';

export interface State {
  count: number;
}

export interface ContextProps {
  state: State;
  dispatch?: React.Dispatch<Action>;
}

const INITIAL_DATA: State = {
  count: 0,
};

const ButtonsContext = createContext<ContextProps>({
  state: INITIAL_DATA,
});

export const ButtonsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ButtonsReducer, INITIAL_DATA);
  return <ButtonsContext.Provider value={{ state, dispatch }}>{children}</ButtonsContext.Provider>;
};

export const useButtons = () => useContext(ButtonsContext);
