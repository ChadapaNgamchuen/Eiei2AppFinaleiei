import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default function Ep7() {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image
                style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2, borderRadius: 20 ,margin:6}}
                source={{ uri: "https://media.istockphoto.com/id/1321675346/photo/funny-bengal-cat-in-glasses-reading-a-book-education-concept.jpg?s=612x612&w=0&k=20&c=PZ-sOKGzdI9xLcG9EZMHTwrd6fgGfh9JRvts1skT8CI=" }}
            />
        </View>
    );
}