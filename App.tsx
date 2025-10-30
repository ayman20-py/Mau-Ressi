import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomePage } from './Screens/HomePage';
import { CreateTemplatePage } from './Screens/CreateTemplate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './Styles/styles';


const Stack = createNativeStackNavigator(); // Creating the stack navigator variable 
const Tab = createBottomTabNavigator(); // Creating the tab navigator variable

// Creating the root stack which is responsible for handling
// going back and forth between screens using the stack system principle.
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomePage" 
        component={RootTabs} 
        options={{
          title: "",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}


// The root tab is responsible for handling the navigation between 
// different tabs at the bottom of the screen.
function RootTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
       name="HomePage" 
       component={HomePage} 
        options={{
         title: "Home Page",
         headerStyle: { 
          backgroundColor: styles.header.backgroundColor,
         },
         headerTintColor: styles.header.foregroundColor

      }}
       />
      <Tab.Screen 
        name="CreateTemplatePage" 
        component={CreateTemplatePage} 
        options={{
          title: "Create Template",
          headerStyle: {
            backgroundColor: styles.header.backgroundColor
          },
          headerTintColor: styles.header.foregroundColor
        }}
      />
    </Tab.Navigator>
  )
}


// This function is responsible for the launching and handling of the 
// stacks and bottom tab navigation and screens.
export default function App() {
  return (
    <NavigationContainer>
     <RootStack />
    </NavigationContainer>
  );
}
