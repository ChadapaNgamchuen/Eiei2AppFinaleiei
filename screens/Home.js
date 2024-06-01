import React from "react";
import { ScrollView, View } from "react-native";
import Ep1 from "../components/EieiHome/Ep1";
import Ep2 from "../components/EieiHome/Ep2";
import Ep3 from "../components/EieiHome/Ep3";
import Ep4 from "../components/EieiHome/Ep4";
import Ep5 from "../components/EieiHome/Ep5";
// import { useNavigation } from "@react-navigation/native";

export default function Home() {
    // const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 7 ,shadowColor:"gray",padding:1}}>
              <Ep1/>
              <Ep2/>
              <Ep3/>
              <Ep4/>
              <Ep5/>
            </View>
        </ScrollView>

    );
}
