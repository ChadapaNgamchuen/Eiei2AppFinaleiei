import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function P1() {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "row", padding: 5, margin:10, shadowColor: "gray",borderBottomWidth:1,shadowRadius:3,shadowColor:"gray",borderRadius:1,borderBlockColor:"gray"}}>
            <View style={{paddingLeft:10,flexDirection:"row",padding:5,marginTop:14}}>
                <TouchableOpacity onPress={() => { navigation.navigate("Home"); }}> 
                    <FontAwesome name="home" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{paddingLeft:10,flexDirection:"row",padding:5,marginTop:9}}>
               
                <Text style={{fontSize:25,marginLeft:15}}>Class101</Text>
            </View>
               
                <Image style={{ width: 45, height: 45, borderRadius:50/2, marginLeft: 80,marginTop:7 }} source={{uri : "https://ih1.redbubble.net/image.5457619242.3746/raf,360x360,075,t,fafafa:ca443f4786.jpg"}} />
            
            <View style={{ flexDirection: "row", marginLeft: 23,marginTop:15}}>
                <TouchableOpacity onPress={() => { navigation.navigate("Login"); }}> 
                    <AntDesign name="star" size={26} color="black" />
                </TouchableOpacity>
            </View>
            
        </View>
    );
}
