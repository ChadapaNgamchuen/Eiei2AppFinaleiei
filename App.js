import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './navigations/BottomTab';
import Home from './screens/Home';
import Login from './screens/Login';
import BookForm from './screens/BookForm';
import BookDetail from './screens/BookDetail';
import Book from './screens/Book';
import RootStack from './navigations/RootStack';
import Stream from './screens/Stream';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }}
          name="Main" 
          component={BottomTab} 
        />
        <Stack.Screen options={{ headerShown: false }}
          name="Home" 
          component={Home} 
        />
        
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
        <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
        <Stack.Screen name="BookForm" component={BookForm}   />
        <Stack.Screen 
          name="RootStack" 
          component={RootStack} 
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
