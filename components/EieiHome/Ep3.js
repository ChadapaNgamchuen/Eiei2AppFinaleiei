import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text, TouchableOpacity, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Ep3() {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "column" }}>
            <View style={{ paddingLeft: 10, flexDirection: "column", padding: 5, marginTop: 9 }}>
                <Text style={{ fontSize: 20, marginLeft: 15, fontWeight: 'bold' }}>Class101</Text>
            </View>

            <View style={{ backgroundColor: "white", flex: 1 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Stream') }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2, borderRadius: 20 ,margin:6}} source={{ uri: "https://media.istockphoto.com/id/1321675346/photo/funny-bengal-cat-in-glasses-reading-a-book-education-concept.jpg?s=612x612&w=0&k=20&c=PZ-sOKGzdI9xLcG9EZMHTwrd6fgGfh9JRvts1skT8CI=" }} />
                    </View>
                </TouchableOpacity>
               
            </View>
        </View>
    );
}
