import React from 'react';
import GlobalStyle from './styles/global';
// eslint-disable-next-line import/extensions
import SignIn from './pages/SignIn';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Dantas' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
