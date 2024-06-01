import React from "react";
import { ScrollView, View } from "react-native";
import IDStorange from "../storange/IDStorange";
import ID from"../EieiLogin/ID"

export default function Login() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 7 ,shadowColor:"gray",padding:1}}>
               <ID/>
               
            </View>
        </ScrollView>

    );
}
