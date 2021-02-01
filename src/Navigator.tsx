import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthScreen from './screens/AuthScreen';
import PrimaryScreen from './screens/PrimaryScreen';
import SecondaryScreen from './screens/SecondaryScreen';
import { getIsAuthenticated } from './store/modules/auth';

type AuthNavigatorScreenParms = {
  AuthScreen: undefined;
};

type RootNavigatorScreenParams = {
  PrimaryScreen: undefined;
  SecondaryScreen: undefined;
};

export type NavigationProp<
  Screen extends keyof RootNavigatorScreenParams
> = StackNavigationProp<RootNavigatorScreenParams, Screen>;

const RootNavigator = () => {
  const Stack = createStackNavigator<RootNavigatorScreenParams>();

  const navigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PrimaryScreen"
        component={PrimaryScreen}
        options={navigationOptions}
      />
      <Stack.Screen
        name="SecondaryScreen"
        component={SecondaryScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  const Stack = createStackNavigator<AuthNavigatorScreenParms>();

  const navigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
};

export const Navigator = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
