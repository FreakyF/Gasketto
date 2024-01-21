import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {LightSensor} from "expo-sensors";

export default function Linia({text = ""}) {

    const [illuminance, setilluminance] = useState(26);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles;
    LightSensor.addListener(data => {setilluminance(data.illuminance)})
    return (

        <>
            <View style={aktywnystyl.hr}/>
            <Text style={aktywnystyl.hrlabel}>{text}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    },
    hrlabel: {
        minWidth: '75%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#000',
    },
});
const Darkstyles = StyleSheet.create({
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    },
    hrlabel: {
        minWidth: '75%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#fff',
    },
});