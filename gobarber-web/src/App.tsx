import React from 'react';
import GlobalStyle from './styles/global';
// eslint-disable-next-line import/extensions
import SignIn from './pages/SignIn/';

const App: React.FC = () => (
  <>
    <SignIn /> 
    <GlobalStyle />
  </>
);

export default App;
