import React from "react";
import { ScrollView, View } from "react-native";
import Ep6 from "../components/EieiStream/Ep6";
import Ep7 from "../components/EieiStream/Ep7";
import Ep9 from "../components/EieiStream/Ep9";
import Ep8 from "../components/EieiStream/Ep8";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Stream() {
    
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 7 ,shadowColor:"gray",padding:1}}>
              <Ep6/>
              <Ep7/>
              <Ep8/>
              <Ep9/>
            </View>
        </ScrollView>

    );
}
