import React from "react";
import { ScrollView, View } from "react-native";
import P1 from "../components/EieiPeople/P1";
import P2 from "../components/EieiPeople/P2";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function People() {
    const Tab = createBottomTabNavigator();
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 7 ,shadowColor:"gray",padding:1}}>
              <P1/>
              <P2/>
            </View>
        </ScrollView>

    );
}
