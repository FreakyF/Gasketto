import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Naprawa from "./nadchodzace-naprawy-wizyta";
import Linia from "../../ui/Linia";
import Tytul from "../../ui/Tytul";
import {LightSensor} from "expo-sensors";

function NadchodzaceNaprawyEkran({navigation}) {

    const [illuminance, setilluminance] = useState(0);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})

    return (
        <View style={aktywnystyl.container}>
            <Tytul text={"Nadchodzące naprawy"}/>
            <Linia text="Dzisiaj"/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
        </View>
    )
}

export default NadchodzaceNaprawyEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
});