import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ep1 from '../components/EieiHome/Ep1';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Stream from '../screens/Stream';

const Stack = createStackNavigator();

export default function HomeStack() {
    
    return (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Profile"
            component={Login}
            options={{ title: "star" }}
          />   

         
        <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
        <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
        <Stack.Screen name="BookForm" component={BookForm}   />

        </Stack.Navigator>
          
      );
    }
    
