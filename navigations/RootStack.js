import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import Book from "../screens/Book";
import BookDetail from "../screens/BookDetail";
import BookForm from "../screens/BookForm";
import HomeStack from "./HomeStack";
import Stream from "../screens/Stream";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
      <Stack.Screen name="BookForm" component={BookForm}   />
    </Stack.Navigator>
  );
}
