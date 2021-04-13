import React from 'react';

import { ButtonsProvider } from '../ButtonsContext';
import { ImmutableProvider } from '../ImmutableContext';

const MainContext: React.FC = ({ children }) => (
  <ImmutableProvider>
    <ButtonsProvider>{children}</ButtonsProvider>
  </ImmutableProvider>
);

export default MainContext;
