import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabnavigator from './src/navigators/Tabnavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Tabnavigator />
    </NavigationContainer>
  );
};

export default App;
