import React from 'react';
import {
  StatusBar
} from 'react-native';


import Main from './src/pages/Main';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Main />
    </>
  );
};

export default App;
