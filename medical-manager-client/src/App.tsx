import React from 'react';

import GlobalStyle from './global';
import ManageDoctors from './pages/ManageDoctors';

const App: React.FC = () => (
    <>
        <ManageDoctors />
        <GlobalStyle />
    </>
);

export default App;
