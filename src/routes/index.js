import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import AnswerQuiz from '../pages/AnswerQuiz';
import CreateQuiz from '../pages/CreateQuiz';

import Feather from 'react-native-vector-icons/Feather';
import ViewQuiz from '../pages/ViewQuiz';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: '#ccc',
          borderTopWidth: 0,
        },
        inactiveTintColor: '#000',
        activeTintColor: '#550073',
      }}>
      <Tab.Screen
        name="Home"
        component={StackScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Stack.Screen
        name="CreateQuiz"
        component={CreateQuiz}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Feather name="plus" color={color} size={size} />;
          },
        }}
      />
      <Stack.Screen
        name="AnswerQuiz"
        component={AnswerQuiz}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Feather name="database" color={color} size={size} />;
          },
        }}
      />

      <Stack.Screen
        name="ViewQuiz"
        component={ViewQuiz}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Feather name="eye" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="list" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
