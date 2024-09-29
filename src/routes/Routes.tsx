import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/Login/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUp/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {IconProps} from '../components/Icon/Icon';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  // TODO: Success Screen: icon, title, description
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
