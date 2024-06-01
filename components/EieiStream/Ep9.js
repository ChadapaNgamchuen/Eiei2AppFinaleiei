import React from "react";
import { View, TextInput, Image, Text ,ScrollView} from "react-native";

export default function Ep9() {
    return (
        <View>
            <View style={{ margin:5, padding: 15, borderRadius: 15, flexDirection: "row" ,borderWidth: 1, borderColor: 'gray',marginTop:10,shadowColor:"green",elevation:30}}> 
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri: "https://i.pinimg.com/564x/27/2d/52/272d5244a40ec9665504af9d7b7a0e89.jpg"  }} />
                <View style={{flexDirection:"column"}}>
                    <Text style={{ marginLeft: 15, marginTop: 1, fontSize: 17, fontWeight: 'bold' }}>Professor cat</Text>
                    <Text style={{ marginLeft: 15,marginTop:1,fontSize:15,color:"gray"}}>Yesterday</Text>
                    <Text style={{ marginLeft: -10,marginTop:20,fontSize:15}}>Do your Homework plz</Text>
                        <View style={{ margin: 1, padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 15, flexDirection: "row", marginTop: 20, height:40, width: 350, marginLeft: -50, alignItems: 'center' }}>
                            <Text>Add class comment</Text>
                        </View>

                </View>
            </View>

            <View style={{ margin:5, padding: 15, borderRadius: 15, flexDirection: "row" ,borderWidth: 1, borderColor: 'gray',marginTop:10}}> 
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri: "https://i.pinimg.com/564x/27/2d/52/272d5244a40ec9665504af9d7b7a0e89.jpg"  }} />
                <View style={{flexDirection:"column"}}>
                    <Text style={{ marginLeft: 15, marginTop: 1, fontSize: 17, fontWeight: 'bold' }}>Professor cat</Text>
                    <Text style={{ marginLeft: 15,marginTop:1,fontSize:15,color:"gray"}}>Posted 9 Feb</Text>
                    <Text style={{ marginLeft: -10,marginTop:20,fontSize:15}}>week06 algorithm complexity</Text>
                        <View style={{ margin: 1, padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 15, flexDirection: "row", marginTop: 20, height:40, width: 350, marginLeft: -50, alignItems: 'center' }}>
                            <Text>Add class comment</Text>
                        </View>

                </View>
            </View>

            <View style={{ margin:5, padding: 15, borderRadius: 15, flexDirection: "row" ,borderWidth: 1, borderColor: 'gray',marginTop:10}}> 
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri: "https://i.pinimg.com/564x/27/2d/52/272d5244a40ec9665504af9d7b7a0e89.jpg"  }} />
                <View style={{flexDirection:"column"}}>
                    <Text style={{ marginLeft: 15, marginTop: 1, fontSize: 17, fontWeight: 'bold' }}>Professor cat</Text>
                    <Text style={{ marginLeft: 15,marginTop:1,fontSize:15,color:"gray"}}>Posted 29 Jan</Text>
                    <Text style={{ marginLeft: -10,marginTop:20,fontSize:15}}>week04 sort algorithms</Text>
                        <View style={{ margin: 1, padding: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 15, flexDirection: "row", marginTop: 20, height:40, width: 350, marginLeft: -50, alignItems: 'center' }}>
                            <Text>Add class comment</Text>
                        </View>

                </View>
            </View>

        </View>
    );
}

