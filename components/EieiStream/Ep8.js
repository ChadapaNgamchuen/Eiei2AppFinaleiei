import React from "react";
import { View, TextInput, Image, Text } from "react-native";

export default function Ep8() {
    return (
        <View>
            <View style={{ margin: 5, padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 15, flexDirection: "row",marginTop:10,elevation:10,shadowColor:10,shadowColor:"gray",elevation:10,shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.25,shadowRadius: 3,}}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri: "https://ih1.redbubble.net/image.5457619242.3746/raf,360x360,075,t,fafafa:ca443f4786.jpg" }} />
                <Text style={{ marginLeft: 15,marginTop:13}}>Announce something to your class</Text>
            </View>
            
        </View>
    );
}
