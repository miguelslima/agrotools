import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
// import Routes from './routes/index';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        hidden
        translucent
      />
      {/* <Routes /> */}
    </NavigationContainer>
  );
};

export default App;
