import React from 'react';

import {Provider} from 'react-redux';
import store from './app/store';

import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './app/navigation/TabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
