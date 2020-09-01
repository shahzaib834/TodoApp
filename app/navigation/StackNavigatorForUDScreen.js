import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import UDTodos from './screens/UDTodos';
import UDTodos2 from './screens/UDTodos2';

const StackNavigatorForUDScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="UDTodos" component={UDTodos} />
      <Stack.Screen name="UDTodos2" component={UDTodos2} />
    </Stack.Navigator>
  );
};

export default StackNavigatorForUDScreen;
