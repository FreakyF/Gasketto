import {StyleSheet, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {LightSensor} from "expo-sensors";

export default function Tytul({text = "", size = 45}) {
    const [illuminance, setilluminance] = useState(26);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})
    return (
        <>
            <Text style={{...aktywnystyl.titletext, fontSize: size}}>{text}</Text>
        </>
    )
}


const styles = StyleSheet.create({
    titletext: {
        fontFamily: 'Roboto',
        textAlign: "center",
        margin: 20,
        color: '#000',
    },
});
const Darkstyles = StyleSheet.create({
    titletext: {
        fontFamily: 'Roboto',
        textAlign: "center",
        margin: 20,
        color: '#fff',
    },
});