import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomePage } from './Screens/HomePage';
import { CreateTemplatePage } from './Screens/CreateTemplate';
import { CustomerPage } from './Screens/Customers';
import { InvoicesPage } from './Screens/Invoices';
import { SettingsPage } from './Screens/Settings';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles, { Fonts } from './Styles/styles';
import { Colors, loadFonts } from './Styles/styles';


import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // Active Page User
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator(); // Creating the stack navigator variable 
const Tab = createBottomTabNavigator(); // Creating the tab navigator variable

// Creating the root stack which is responsible for handling
// going back and forth between screens using the stack system principle.
function RootStack() {
  
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) return null;

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home Page" 
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
    <Tab.Navigator initialRouteName="HomePage" screenOptions={({route}) => ({
      tabBarInactiveTintColor: "gray",
      tabBarActiveTintColor: Colors.TEAL,
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: Fonts.BOLD
      },
      tabBarStyle: {
        height: 100,
        paddingTop: 12
      }, 
      tabBarIcon: ({color}) => {
        if (route.name == "CustomerPage") { 
          return <FontAwesome name="user-o" size={24} color={color} />
        }
        else if (route.name == "HomePage") { 
          return <Octicons name="home" size={24} color={color} />
        }
        else if (route.name == "TemplatesPage") {
          return <Octicons name="project-template" size={24} color={color} />
        }
        else if (route.name == "SettingsPage") {
          return <Ionicons name="settings-outline" size={24} color={color} />
        }
        else if (route.name == "InvoicesPage") {
          return <MaterialCommunityIcons name="invoice-list-outline" size={24} color={color} />
        }
      }
    })}>
      <Tab.Screen 
       name="HomePage" 
       component={HomePage} 
        options={{
         title: "Mau Ressi",
         headerStyle: { 
          backgroundColor: Colors.BackgroundColor,
          
         },
         headerTintColor: Colors.PrimaryFontColor,
         headerTitleStyle: {
          fontFamily: Fonts.BOLD,
          fontSize: 25,
         },
         tabBarLabel: "Home",
      }}
       />

       {/* Create Template Page setup & options */}
      <Tab.Screen 
        name="TemplatesPage" 
        component={CreateTemplatePage} 
        options={{
          title: "Templates",
          headerStyle: {
            backgroundColor: Colors.BackgroundColor
          },
          headerTintColor: Colors.PrimaryFontColor,
          headerTitleStyle: {
            fontFamily: Fonts.BOLD,
            fontSize: 25
          }
        }}
      />

       {/* Customer Page setup & options */}

      <Tab.Screen 
        name="CustomerPage" 
        component={CustomerPage} 
        options={{
          title: "Customers",
          headerStyle: {
            backgroundColor: Colors.BackgroundColor
          },
          headerTintColor: Colors.PrimaryFontColor,
          headerTitleStyle: {
            fontFamily: Fonts.BOLD,
            fontSize: 25
          }
        }}
      />

       {/* Invoices Page setup & options */}

      <Tab.Screen 
        name="InvoicesPage" 
        component={InvoicesPage} 
        options={{
          title: "Invoices",
          headerStyle: {
            backgroundColor: Colors.BackgroundColor
          },
          headerTintColor: Colors.PrimaryFontColor,
          headerTitleStyle: {
            fontFamily: Fonts.BOLD,
            fontSize: 25
          }
        }}
      />

       {/* Settings Page setup & options */}

      <Tab.Screen 
        name="SettingsPage" 
        component={SettingsPage} 
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.BackgroundColor
          },
          headerTintColor: Colors.PrimaryFontColor,
          headerTitleStyle: {
            fontFamily: Fonts.BOLD,
            fontSize: 25
          }
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
