import React from 'react';
import {View, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import IconForTab from './IconForTab';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddTodos from './screens/AddTodos';

import StackNavigatorForUDScreen from './StackNavigatorForUDScreen';
import StackNavigatorForTodosScreen from './StackNavigatorForTodosScreen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'StackNavigatorForTodosScreen') {
            return <FontAwesome5 name="tasks" size={30} color={color} />;
          } else if (route.name === 'StackNavigatorForUDScreeen') {
            return <AntDesign name="edit" size={32} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',

        inactiveBackgroundColor: '#fff',
        showLabel: false,
      }}>
      <Tab.Screen
        name="StackNavigatorForTodosScreen"
        component={StackNavigatorForTodosScreen}
      />
      <Tab.Screen
        name="AddTodos"
        component={AddTodos}
        options={({navigation}) => ({
          tabBarButton: () => (
            <IconForTab onPress={() => navigation.navigate('AddTodos')} />
          ),
        })}
      />
      <Tab.Screen
        name="StackNavigatorForUDScreeen"
        component={StackNavigatorForUDScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addIcon: {
    marginBottom: 28,
    height: 80,
    width: 70,
    borderBottomLeftRadius: 20,
  },
});
export default TabNavigator;
