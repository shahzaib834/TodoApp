import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Todos1 from './screens/Todos1';
import Todos2 from './screens/Todos2';

const StackNavigatorForTodosScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Todos1" component={Todos1} />
      <Stack.Screen name="Todos2" component={Todos2} />
    </Stack.Navigator>
  );
};

export default StackNavigatorForTodosScreen;
