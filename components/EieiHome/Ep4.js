import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text,Button, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function Ep4() {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "column" }}>
            <View style={{paddingLeft:10,flexDirection:"column",padding:5,marginTop:30}}>
                <Text style={{fontSize:20,marginLeft:15,fontWeight: 'bold'}}>Class102</Text>
            </View>
            <View style={{ backgroundColor: "white", flex: 1 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Stream') }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2, borderRadius: 20 ,margin:6}} source={{ uri: "https://t4.ftcdn.net/jpg/06/90/99/85/360_F_690998573_Pmak7TryL8E4GYtKBCHty2il4am4WC27.jpg" }} />
                    </View>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}
