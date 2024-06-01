import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native"; // Fixed import statement
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default function Ep5(props) {   
    
    const onPressButton = () => {
        // Add  logic for button press here
    };
    
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-around', padding: 20, alignContent: "flex-end" ,marginLeft:290,marginTop:70}}> 
            <TouchableOpacity onPress={onPressButton}>
                <View>
                    <AntDesign name="plussquare" size={40} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
