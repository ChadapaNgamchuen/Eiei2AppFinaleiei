import React from "react";
import { ScrollView, View } from "react-native";
import Work1 from "../components/EieiClasswork/Work1";
import Work2 from "../components/EieiClasswork/Work2";
import { useNavigation } from "@react-navigation/native";

export default function Classwork() {
   
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 7 ,shadowColor:"gray",padding:1}}>
              <Work1/>
              <Work2/>
            </View>
        </ScrollView>

    );
}
