import React from 'react';
import GlobalStyle from './styles/global';
// eslint-disable-next-line import/extensions
// import SignIn from './pages/signIn';
import SignUp from './pages/SignUp/';

const App: React.FC = () => (
  <>
    {/* <SignIn /> */}
    <SignUp /> 
    <GlobalStyle />
  </>
);

export default App;
