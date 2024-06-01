import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Ep6() {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "row", padding: 5, margin:10, shadowColor: "gray",borderBottomWidth:1,shadowRadius:3,shadowColor:"gray",borderRadius:1,borderBlockColor:"gray",shadowOffset:{ width: 0, height: 2 }}}>
            <View style={{paddingLeft:10,flexDirection:"row",padding:5,marginTop:14}}>
                <TouchableOpacity onPress={() => { navigation.navigate("Home"); }}>
                    <FontAwesome name="home" size={30} color="black" />
                </TouchableOpacity>  
            </View>

            <View style={{paddingLeft:10,flexDirection:"row",padding:8,marginTop:9,marginLeft:220}}>
               
            <AntDesign name="infocirlceo" size={24} color="black" />
            </View>
    
                
            <View style={{ flexDirection: "row", marginLeft: 23,marginTop:15}}>
                <TouchableOpacity onPress={() => { navigation.navigate("Login"); }}>
                    <AntDesign name="star" size={26} color="black" />
                </TouchableOpacity>      
            </View>
            
        </View>
    );
}
