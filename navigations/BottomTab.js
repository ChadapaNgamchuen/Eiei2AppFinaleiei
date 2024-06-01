import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Stream from '../screens/Stream';
import Classwork from '../screens/Classwork';
import People from '../screens/People';
import Login from '../screens/Login';
import RootStack from './RootStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ tabBarVisible: false }} 
      />

    <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ tabBarVisible: false }} 
      />


    </Stack.Navigator>
  );
}

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      {/* <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name='Stream'
        component={Stream}
        options={{
          tabBarLabel: "Stream",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="stream" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Classwork"
        component={Classwork}
        options={{
          tabBarLabel: "Classwork",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="People"
        component={People}
        options={{
          tabBarLabel: "People",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
