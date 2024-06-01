import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity,StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function P2() {
    return (
        <View>
            
            <View style={{paddingLeft:10,flexDirection:"row",padding:5,marginTop:9}}>

               <Text style={{fontSize:25,marginLeft:15,fontWeight: 'bold'}}>Teachers</Text>
           </View>

           <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri: "https://i.pinimg.com/564x/27/2d/52/272d5244a40ec9665504af9d7b7a0e89.jpg"  }} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>Professor cat</Text>
                
                <TouchableOpacity>
                <Entypo style={{marginLeft: 100, marginTop: 13}} name="chat" size={24} color="black" />
                </TouchableOpacity>
            </View>

             <View style={{paddingLeft:10,flexDirection:"row",padding:5,marginTop:9}}>
                
               <Text style={{fontSize:25,marginLeft:15,fontWeight: 'bold'}}>Classmates</Text>
           </View>
          
           <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri:  "https://ih1.redbubble.net/image.5457619242.3746/raf,360x360,075,t,fafafa:ca443f4786.jpg"}} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>Sad Hamster</Text>
            </View>

            <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri:  "https://i.pinimg.com/474x/09/93/6d/09936dccd3aadeabf881ba71c69e2972.jpg"}} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>A1</Text>
                
                <TouchableOpacity>
                <Entypo style={{marginLeft: 200, marginTop: 13}} name="chat" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri:  "https://i.pinimg.com/474x/09/93/6d/09936dccd3aadeabf881ba71c69e2972.jpg"}} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>A2</Text>
               
                <TouchableOpacity>
                <Entypo style={{marginLeft: 200, marginTop: 13}} name="chat" size={24} color="black" />
                </TouchableOpacity>
           
            </View>

            <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri:  "https://i.pinimg.com/474x/09/93/6d/09936dccd3aadeabf881ba71c69e2972.jpg"}} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>B1</Text>
                
                <TouchableOpacity>
                <Entypo style={{marginLeft: 200, marginTop: 13}} name="chat" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri:  "https://i.pinimg.com/474x/09/93/6d/09936dccd3aadeabf881ba71c69e2972.jpg"}} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>B2</Text>
                
                <TouchableOpacity>
                <Entypo style={{marginLeft: 200, marginTop: 13}} name="chat" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri:  "https://i.pinimg.com/474x/09/93/6d/09936dccd3aadeabf881ba71c69e2972.jpg"}} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>C1</Text>
                
                <TouchableOpacity>
                <Entypo style={{marginLeft: 200, marginTop: 13}} name="chat" size={24} color="black" />
                </TouchableOpacity>
            
            </View>

            <View style={{ margin: 5, padding: 10, flexDirection: "row", marginTop: 10, elevation: 10 }}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 / 2, marginLeft: 1, marginTop: 1}} source={{ uri:  "https://i.pinimg.com/474x/09/93/6d/09936dccd3aadeabf881ba71c69e2972.jpg"}} />
                <Text style={{ marginLeft: 15, marginTop: 13,fontSize:20 }}>C2</Text>
                
                <TouchableOpacity>
                <Entypo style={{marginLeft: 200, marginTop: 13}} name="chat" size={24} color="black" />
                </TouchableOpacity>
            
            </View>

        </View>
    );
}