import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';


export default function Ep2() {
    return (
        <View style={{ flexDirection: "row", margin:10,shadowRadius:3,shadowColor:"gray",borderRadius:1,alignContent:"flex-start"}}>
          <View style={{width:50,height:50,borderRadius:20,}}/>
          <View style={{  }}>
                <Text style={{ fontSize : 20 }}>This week</Text>
                <Text style={{ color : '#444444' }}>No work coming up at present</Text>
            </View>

            
            
        </View>
    );
}
