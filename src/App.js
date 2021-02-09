import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import Header from './components/Header';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#550073"
        translucent
      />
      <Header />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
