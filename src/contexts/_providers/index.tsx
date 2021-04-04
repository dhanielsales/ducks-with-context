import React from 'react';

import { ButtonsProvider } from '../ButtonsContext';

const MainContext: React.FC = ({ children }) => <ButtonsProvider>{children}</ButtonsProvider>;

export default MainContext;
